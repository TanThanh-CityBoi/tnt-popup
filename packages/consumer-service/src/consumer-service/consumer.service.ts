import { isEmpty } from 'lodash';
import { getRepository } from 'typeorm';
import {
  response,
  MESSAGE_RESPONSE,
  findOperatorParser,
  getListPagingByEntity,
} from '../utils';

export class ConsumerService {
  public async getOne(payload, entity) {
    findOperatorParser(payload);
    return getRepository(entity).findOne(payload);
  }

  public async getByIds(payload, entity) {
    findOperatorParser(payload);
    return getRepository(entity).findByIds(payload);
  }

  public async getList(payload, entity) {
    findOperatorParser(payload);
    return getRepository(entity).find(payload);
  }

  public async getListPaging(payload, entity) {
    return getListPagingByEntity(payload, entity);
  }

  public async update(payload, entity) {
    const { conditions, data } = payload;
    const updateData = { ...data, updatedAt: new Date() };
    const result = await getRepository(entity).update(conditions, updateData);
    if (!result.affected) return response(404, MESSAGE_RESPONSE.NOT_FOUND);
    return this.getOne(conditions, entity);
  }

  public async store(payload, entity) {
    const { checkExisted, data } = payload;
    if (isEmpty(checkExisted)) {
      return getRepository(entity).save({
        ...payload,
        createdAt: new Date(),
      });
    }
    const conditions = {};
    checkExisted.map((key) => {
      conditions[key] = data[key];
    });
    const existed = await this.getOne(conditions, entity);
    if (!isEmpty(existed)) response(400, MESSAGE_RESPONSE.BAD_REQUEST);
    return getRepository(entity).save({
      ...data,
      createdAt: new Date(),
    });
  }

  public async storeArray(payload, entity) {
    const { data, checkExisted } = payload;
    if (isEmpty(checkExisted)) {
      return getRepository(entity).save(data);
    }
    const conditions = data.map((itm) => {
      const result = {};
      checkExisted.map((key) => {
        result[key] = itm[key];
      });
      return result;
    });
    const existedData = await this.getList({ where: conditions }, entity);
    if (!isEmpty(existedData)) response(400, MESSAGE_RESPONSE.BAD_REQUEST);
    return getRepository(entity).save(data);
  }
}
