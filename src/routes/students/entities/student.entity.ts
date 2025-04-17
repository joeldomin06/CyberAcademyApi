import { Accesibility } from '../../../routes/accesibilities/entities/accesibility.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Archivement } from '../../../routes/archivements/entities/archivement.entity';
import { Minigame } from '../../../routes/minigames/entities/minigame.entity';
import { Personalization } from '../../../routes/personalizations/entities/personalization.entity';
import { LaboratoriesCarriedOut } from '../../../routes/laboratories_carried_out/entities/laboratories_carried_out.entity';
import { TheoreticalQuestionnaire } from '../../../routes/theoretical_questionnaires/entities/theoretical_questionnaire.entity';
import { Instance } from 'src/routes/instances/entities/instance.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'varchar',
    length: 60,
    unique: true
  })
  nickname: string;
  @Column({
    type: 'varchar',
    length: 100,
  })
  password: string;
  @Column({ type: 'boolean', default: true })
  isAvailable: boolean;
  @Column({
    type: 'numeric',
    default: 0,
    nullable: true
  })
  level: number;
  //OnetoOne
  @OneToOne(() => Accesibility, (a) => a.student, { cascade: true })
  @JoinColumn()
  accesibility: Accesibility;
  @OneToOne(() => Personalization, (p) => p.student, { cascade: true })
  @JoinColumn()
  personalization: Personalization;
  @OneToOne(() => Minigame, (m) => m.student, { cascade: true })
  @JoinColumn()
  minigame: Minigame;
  //One to Manies
  @OneToMany(() => Archivement, (a) => a.student, { cascade: true })
  archivements: Archivement[];
  @OneToMany(() => TheoreticalQuestionnaire, (a) => a.student, { cascade: true })
  tq: TheoreticalQuestionnaire[];
  @OneToMany(() => LaboratoriesCarriedOut, (a) => a.student, { cascade: true })
  lco: LaboratoriesCarriedOut[];
  @OneToMany(()=>Instance,(i) => i.student, {cascade: true})
  instances: Instance[];
}
