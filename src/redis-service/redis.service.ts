import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService {
  private readonly redis: Redis;

  constructor() {
    this.redis = new Redis({
      host: 'localhost',
      port: 6379,
    });
  }

  async addToStream(
    stream: string,
    message: Record<string, any>,
  ): Promise<string> {
    const entries = Object.entries(message).flat();
    return this.redis.xadd(stream, '*', ...entries);
  }
}
