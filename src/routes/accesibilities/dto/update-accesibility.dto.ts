import { PartialType } from "@nestjs/mapped-types";
import { IsBoolean, IsBooleanString, IsNotEmpty, IsNumber } from "class-validator";
import { CreateAccesibilityDto } from "./create-accesibility.dto";

export class UpdateAccesibilityDto extends PartialType(CreateAccesibilityDto){
    @IsNumber({},{message: "Debe ser un numero"})
    brightness: number;
    @IsNumber({},{message: "Debe ser un numero"})
    contrast: number;
    @IsNumber({},{message: "Debe ser un numero"})
    effectVolume: number;
    @IsNumber({},{message: "Debe ser un numero"})
    musicVolume: number;
    @IsBoolean({message: "Debe ser un booleano"})
    fullScreen: boolean;
    @IsNotEmpty({message: "la resolución es requerida"})
    currResolution: string;
}
