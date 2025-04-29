import { Student } from "../../../routes/students/entities/student.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Instance {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(()=>Student)
    student: Student;
    @Column({
        type: "varchar"
    })
    typeLab: string;
    @Column({
        type: "numeric"
    })
    subInstanceId: number;
    @Column({
        type: "numeric"
    })
    score: number;
    @Column({
        type: "numeric"
    })
    hintsUsed: number;
    @Column({
        type: "boolean"
    })
    completed: boolean;
    @Column({
        type: "varchar"
    })
    time: string;
}
