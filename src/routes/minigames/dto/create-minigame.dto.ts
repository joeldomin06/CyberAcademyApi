import { IsNumber } from "class-validator";

export class CreateMinigameDto {
    @IsNumber({},{message:"Debe ser un numero"})
    studentId: number
}
