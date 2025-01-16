import { EntityTarget } from 'typeorm';
export type consumerConst<Entity> = [string, string, EntityTarget<Entity>];
