import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateLaboratoriesCarriedOutDto {
    @IsNumber({},{message: "studentId debe ser un id"})
    studentId: number;
    @IsNotEmpty({message: "debe contener un type"})
    type: string;
}
