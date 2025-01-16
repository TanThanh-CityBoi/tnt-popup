import { EntityTarget } from 'typeorm';
import { ConsumerService } from './consumer.service';

type consumerConst<Entity> = [string, string, EntityTarget<Entity>]

export function consumer<Entity>([service, entityStr, entityClass]: consumerConst<Entity>): ConsumerService<Entity> {
  const host = process.env[`${service}_SERVICE_HOST`];
  const port = Number(process.env[`${service}_SERVICE_PORT`]);
  return new ConsumerService({ host, port }, entityStr);
}