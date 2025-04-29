import { Component } from '../../../routes/components/entities/component.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ComponentsType {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'varchar',
    length: 60,
  })
  name: string;
  @Column({
    type: 'varchar',
    length: 60,
  })
  category: string;
  @Column({ type: 'int' })
  chibicoins: number;
  @OneToMany(() => Component, (c) => c.componentType, { cascade: true })
  components: Component[];
}
