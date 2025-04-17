import { Student } from '../../../routes/students/entities/student.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
@Entity()
export class Minigame {
  @PrimaryGeneratedColumn()
  id: number;
  @OneToOne(() => Student, (student) => student.minigame)
  student: Student;
  @Column({ type: 'int', default: 0 })
  highScorePhishing: number;
  @Column({ type: 'int', default: 0 })
  highScoreDDOS: number;
  @Column({ type: 'int', default: 0 })
  highScoreWorm: number;
}
