import { ComponentsType } from '../../../routes/components_types/entities/components_type.entity';
import { Personalization } from '../../../routes/personalizations/entities/personalization.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
@Entity()
export class Component {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Personalization)
  personalization: Personalization;
  @RelationId((com: Component) => com.personalization)
  personalizationId: number;
  @ManyToOne(() => ComponentsType, {eager:true})
  componentType: ComponentsType;
  @RelationId((com: Component) => com.componentType)
  componentTypeId: number;
  @Column({ type: 'boolean', default: false })
  isUnlocked: boolean;
}
