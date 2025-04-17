import { IsNumber } from "class-validator";

export class CreatePersonalizationDto {
    @IsNumber({},{message:"studentId debe ser un numero"})
    studentId: number;
}
