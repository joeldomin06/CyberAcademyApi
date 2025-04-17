import { IsNotEmpty } from "class-validator";

export class CreateArchivementDto {
    @IsNotEmpty({message: "el id estudiante es obligatorio"})
    studentId: number
    @IsNotEmpty({message: "el id del tipo es obligatorio"})
    archivementTypeId: number
}
