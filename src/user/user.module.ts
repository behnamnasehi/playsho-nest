import { Module } from '@nestjs/common';
import { UserApiController } from './user.api.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.entity';
import { DeviceModule } from '../device/device.module';
import { PassportModule } from '../passport/passport.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    DeviceModule,
    PassportModule,
  ],
  controllers: [UserApiController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
