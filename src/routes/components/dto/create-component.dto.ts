import { IsBoolean, IsNumber } from "class-validator";

export class CreateComponentDto {
    @IsNumber({},{message:"personalizationId debe ser un numero"})
    personalizationId: number;
    @IsNumber({},{message:"componentTypeId debe ser un numero"})
    componentTypeId: number;
    @IsBoolean({message: "isUnlocked debe ser un booleano"})
    isUnlocked: boolean
}
