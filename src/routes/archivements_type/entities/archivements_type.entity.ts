import { Archivement } from '../../../routes/archivements/entities/archivement.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ArchivementsType {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ type: 'varchar', length: 60 })
    name: string;
    @Column({ type: 'varchar', length: 60 })
    description: string;
    @OneToMany(() => Archivement, (a) => a.archivementType, { cascade: true })
    archivements: Archivement[];
}
