import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Feedback } from './entities/feedback.entity';
import { Repository } from 'typeorm';
import { Order } from 'src/orders/entities/order.entity';
import { Store } from 'src/stores/entities/store.entity';
import { FeedbackType } from 'src/enums/feedback-types.enum';
import { RedisService } from 'src/redis-service/redis.service';

@Injectable()
export class FeedbacksService {
  constructor(
    @InjectRepository(Feedback)
    private readonly feedbackRepository: Repository<Feedback>,
    private readonly redisService: RedisService,
  ) {}
  async create(createFeedbackDto: CreateFeedbackDto) {
    const promises = [];

    const order = new Order();
    order.id = createFeedbackDto.order_id;

    const store = new Store();
    store.id = createFeedbackDto.store_id;

    if (
      !createFeedbackDto.delivery_feedback ||
      !createFeedbackDto.order_feedback
    )
      throw new BadRequestException(
        'Either order_feedback or delivery_feedback must be defined',
      );

    if (createFeedbackDto.delivery_feedback) {
      const feedback = new Feedback();
      feedback.order = order;
      feedback.store = store;

      feedback.type = FeedbackType.Delivery;
      feedback.rating = createFeedbackDto.delivery_feedback.rating;
      feedback.comment = createFeedbackDto.delivery_feedback.comment;
      //Postgres
      promises.push(this.feedbackRepository.save(feedback));
      //Redis
      // promises.push(this.redisService.addToStream('test', feedback));
    }
    if (createFeedbackDto.order_feedback) {
      const feedback = new Feedback();
      feedback.order = order;
      feedback.store = store;

      feedback.type = FeedbackType.Order;
      feedback.rating = createFeedbackDto.order_feedback.rating;
      feedback.comment = createFeedbackDto.order_feedback.comment;

      //Postgres
      promises.push(this.feedbackRepository.save(feedback));

      //Redis
      // promises.push(this.redisService.addToStream('test', feedback));
    }
    await Promise.all(promises);
  }
}
