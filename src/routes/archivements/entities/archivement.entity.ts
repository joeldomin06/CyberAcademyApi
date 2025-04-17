import { Student } from '../../../routes/students/entities/student.entity';
import { ArchivementsType } from '../../../routes/archivements_type/entities/archivements_type.entity';

import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId
} from 'typeorm';

@Entity()
export class Archivement {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Student)
  student: Student;
  @RelationId((ar: Archivement) => ar.student)
  studentId: number;
  @ManyToOne(() => ArchivementsType)
  archivementType: ArchivementsType;
  @RelationId((ar: Archivement) => ar.archivementType)
  archivementTypeId: number;
  @Column({ type: 'boolean', default: false })
  isUnlocked: boolean;
}
