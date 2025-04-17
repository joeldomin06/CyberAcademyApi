import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateTheoreticalQuestionnaireDto {
    @IsNumber({},{message: "debe ser un numero"})
    studentId: number;
    @IsNotEmpty({message: "no debe ir vacio el nombre del tq"})
    name: string;
}
