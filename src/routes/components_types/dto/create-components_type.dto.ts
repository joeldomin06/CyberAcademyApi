import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateComponentsTypeDto {
    @IsNotEmpty({message:"debe haber un nombre"})
    name: string;
    @IsNotEmpty({message: "debe haber una categoria"})
    category: string;
    @IsNumber({},{message:"Los chibicoins deben ser un numero"})
    chibicoins: number;
}
