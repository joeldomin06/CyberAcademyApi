import { PartialType } from '@nestjs/mapped-types';
import { CreateInstanceDto } from './create-instance.dto';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class UpdateInstanceDto {
    @IsNumber({},{message: "el score debe ser un numero"})
    score: number;
    @IsNumber({},{message: "el hints debe ser un numero"})
    hintsUsed: number;
    @IsBoolean({message: "Debe ser un booleano"})
    completed: boolean;
    @IsString({message: "debe ser un string"})
    time: string;
}
