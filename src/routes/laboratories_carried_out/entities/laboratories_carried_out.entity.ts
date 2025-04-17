import { Student } from "../../../routes/students/entities/student.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, RelationId } from "typeorm";

@Entity()
export class LaboratoriesCarriedOut {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(() => Student)
    student: Student;
    @RelationId((lco: LaboratoriesCarriedOut)=>lco.student)
    studentId: number;
    @Column({
        type: 'varchar',
        length: 100,
    })
    type: string;
    @Column({ type: 'boolean', default: false })
    is_opened: boolean;
}
