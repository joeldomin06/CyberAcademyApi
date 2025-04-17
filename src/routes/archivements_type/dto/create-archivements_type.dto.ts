import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateArchivementsTypeDto {
    @IsNotEmpty({message: "el nombre es obligatorio"})
    name: string
    @IsOptional()
    @IsString()
    description: string
}
