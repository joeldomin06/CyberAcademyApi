import { Student } from '../../../routes/students/entities/student.entity';
import {
  Column,
  Entity, OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity()
export class Accesibility {
  @PrimaryGeneratedColumn()
  id: number;
  @OneToOne(() => Student, (student) => student.accesibility)
  student: Student;
  @Column({
    type: 'numeric',
    default: 0
  })
  brightness: number;
  @Column({
    type: 'numeric',
    default: 0
  })
  contrast: number;
  @Column({
    type: 'numeric',
    default: 80
  })
  effectVolume: number;
  @Column({
    type: 'numeric',
    default: 80
  })
  musicVolume: number;
  @Column({
    type: "boolean",
    default: true
  })
  fullScreen: boolean;
  @Column({
    type: "varchar",
    default: "none"
  })
  currResolution: string;
}
