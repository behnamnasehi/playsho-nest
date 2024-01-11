import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import AppCryptography from '../utilities/app.cryptography';
import { MembershipTypeEnum } from '../membership/enum/membership.type.enum';
import { Major } from '../major/major.entity';

@Schema()
export class Subject extends Document {
  @Prop({
    type: MongooseSchema.Types.String,
    trim: true,
    unique: true,
    index: true,
    default: () => AppCryptography.generateUUID(),
  })
  tag: string;

  @Prop({
    type: MongooseSchema.Types.String,
    trim: true,
    default: '',
  })
  title: string;

  @Prop({
    type: MongooseSchema.Types.Number,
    default: 0,
  })
  unlock_cost: number;

  @Prop({
    type: MongooseSchema.Types.Number,
    default: 0,
  })
  question_count: number;

  @Prop({
    type: MongooseSchema.Types.Number,
    default: 1,
  })
  weight: number;

  @Prop({
    type: MongooseSchema.Types.String,
    enum: MembershipTypeEnum,
    default: MembershipTypeEnum.BASIC,
  })
  membership_type: MembershipTypeEnum;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: Major.name,
    default: null,
  })
  field_of_study: MongooseSchema.Types.ObjectId;

  @Prop({
    type: MongooseSchema.Types.Date,
    default: null,
  })
  locked_until: Date;

  @Prop({
    type: MongooseSchema.Types.Date,
    default: Date.now,
  })
  updated_at: Date;

  @Prop({
    type: MongooseSchema.Types.Date,
    default: null,
  })
  deleted_at: Date;

  @Prop({
    type: MongooseSchema.Types.Date,
    default: Date.now,
  })
  created_at: Date;
}

export const SubjectSchema = SchemaFactory.createForClass(Subject);

SubjectSchema.pre<Subject>('updateOne', async function (next) {
  // this.update({}, { $set: { updatedAt: new Date() } });
  next();
});

SubjectSchema.pre<Subject>('save', async function (next) {
  next();
});
