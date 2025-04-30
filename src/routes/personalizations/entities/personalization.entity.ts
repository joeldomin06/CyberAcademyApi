import { Student } from '../../../routes/students/entities/student.entity';
import { Component } from '../../../routes/components/entities/component.entity';
import {
  Column,
  Entity, OneToMany,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity()
export class Personalization {
  @PrimaryGeneratedColumn()
  id: number;
  @OneToOne(() => Student, (student) => student.personalization)
  student: Student;
  @Column({ type: 'int', default: 0 })
  chibicoins: number;
  @Column({ type: 'int', default: 0 })
  currentHead: number;
  @Column({ type: 'int', default: 0 })
  currentHeadColor: number;
  @Column({ type: 'int', default: 0 })
  currentBody: number;
  @Column({ type: 'int', default: 0 })
  currentBodyColor: number;
  @Column({ type: 'int', default: 0 })
  currentHands: number;
  @Column({ type: 'int', default: 0 })
  currentHandsColor: number;
  @Column({ type: 'int', default: 0 })
  currentFoots: number;
  @Column({ type: 'int', default: 0 })
  currentFootsColor: number;
  @Column({ type: 'int', default: 0 })
  currentAvatar: number;
  @Column({ type: 'int', default: 0 })
  currentAvatarFrame: number;
  @Column({ type: 'int', default: 0 })
  currentBanner: number;
  @Column({ type: 'int', default: 0 })
  currentWalpaper: number;
  @OneToMany(() => Component, (c) => c.personalization, {cascade:true,eager:true})
  components: Component[];
}
