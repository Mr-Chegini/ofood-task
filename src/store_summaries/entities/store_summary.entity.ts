import { Store } from 'src/stores/entities/store.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

//TODO chon rabti be store nadare mostaghiman ye table jodash kardim
@Entity()
export class StoreSummary extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Store)
  store_id: Store;

  @Column()
  rating: number;

  @Column()
  comments_count: number;

  @Column()
  rates_count: number;

  @Column()
  rating_one_count: number;

  @Column()
  rating_two_count: number;

  @Column()
  rating_three_count: number;

  @Column()
  rating_four_count: number;

  @Column()
  rating_five_count: number;
}
