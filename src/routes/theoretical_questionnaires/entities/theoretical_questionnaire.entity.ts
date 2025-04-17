import { Student } from "../../../routes/students/entities/student.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, RelationId } from "typeorm";

@Entity()
export class TheoreticalQuestionnaire {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(() => Student)
    student: Student;
    @RelationId((tq: TheoreticalQuestionnaire)=>tq.student)
    studentId: number;
    @Column({type: "varchar"})
    name: string
    @Column({ type: 'boolean', default: false })
    isDone: boolean;
}
