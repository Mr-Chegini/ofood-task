import { FeedbackType } from 'src/enums/feedback-types.enum';
import { Order } from 'src/orders/entities/order.entity';
import { Store } from 'src/stores/entities/store.entity';
import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Feedback extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order)
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @ManyToOne(() => Store)
  @JoinColumn({ name: 'store_id' })
  store: Store;

  @Column({ type: 'enum', enum: FeedbackType })
  type: FeedbackType;

  @Column({ type: 'int2' })
  rating: number;

  @Column({ nullable: true })
  comment: string;
}
