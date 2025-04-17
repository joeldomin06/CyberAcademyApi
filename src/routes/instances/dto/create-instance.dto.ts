import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateInstanceDto {
    @IsNumber({},{message: "el id debe ser un numero"})
    studentId: number;
    @IsNotEmpty({message: "El tipo no puede estar vacio"})
    typeLab: string;
    @IsNumber({},{message: "cantidad de subinstancias"})
    subinstances: number;
}
