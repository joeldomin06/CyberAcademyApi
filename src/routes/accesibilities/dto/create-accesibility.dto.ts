import { IsNumber } from "class-validator";

export class CreateAccesibilityDto {
    @IsNumber({},{message: "debe ser un numero"})
    studentId: number;
}
