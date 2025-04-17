import { PartialType } from '@nestjs/mapped-types';
import { IsNumber } from 'class-validator';

class PersonalizationParameters {
  @IsNumber({},{message: "debe ser un numero"})
  chibicoins: number;
  @IsNumber({},{message: "debe ser un numero"})
  currentHead: number;
  @IsNumber({},{message: "debe ser un numero"})
  currentHeadColor: number;
  @IsNumber({},{message: "debe ser un numero"})
  currentBody: number;
  @IsNumber({},{message: "debe ser un numero"})
  currentBodyColor: number;
  @IsNumber({},{message: "debe ser un numero"})
  currentHands: number;
  @IsNumber({},{message: "debe ser un numero"})
  currentHandsColor: number;
  @IsNumber({},{message: "debe ser un numero"})
  currentFoots: number;
  @IsNumber({},{message: "debe ser un numero"})
  currentFootsColor: number;
  @IsNumber({},{message: "debe ser un numero"})
  currentAvatar: number;
  @IsNumber({},{message: "debe ser un numero"})
  currentAvatarFrame: number;
  @IsNumber({},{message: "debe ser un numero"})
  currentBanner: number;
  @IsNumber({},{message: "debe ser un numero"})
  currentWalpaper: number;
}

export class UpdatePersonalizationDto extends PartialType(PersonalizationParameters){}
