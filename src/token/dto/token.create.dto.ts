import { IsDate, IsNotEmpty, IsString, IsUUID, Matches } from 'class-validator';
import Translate from '../../utilities/locale/locale.translation';

export class TokenCreateDto {

  @IsNotEmpty({ message: Translate('it_cant_be_empty', 'device') })
  @IsString({ message: Translate('it_cant_be_empty', 'device') })
  device: string;

  @IsNotEmpty({ message: Translate('it_cant_be_empty', 'device') })
  @IsString({ message: Translate('it_cant_be_empty', 'device') })
  identifier: string;

  @IsNotEmpty({ message: Translate('it_cant_be_empty', 'device') })
  @IsString({ message: Translate('it_cant_be_empty', 'device') })
  public_key: string;
}
