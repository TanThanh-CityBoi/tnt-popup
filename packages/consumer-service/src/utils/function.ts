import { Between, EntityTarget, getRepository } from 'typeorm';
import { findOperatorParser } from '.';

const getListPagingByEntity = async (
  data: any,
  repository: EntityTarget<any>,
) => {
  const { pagination, query, order, filter } = data;
  const limit = pagination?.limit;
  const skip = pagination?.page - 1 > 0 ? (pagination?.page - 1) * limit : 0;
  let conditions = query;
  conditions = findOperatorParser(conditions);
  if (filter.startDate && filter.endDate) {
    conditions = {
      ...conditions,
      createdAt: Between(filter.startDate, filter.endDate),
    };
  }
  const result = await getRepository(repository).findAndCount({
    where: [conditions],
    take: pagination?.limit,
    skip,
    order,
  });
  return { total: result[1], result: result[0] };
};

const response = (status, message, data = {}) => {
  return {
    status,
    message,
    data,
  };
};

export { response, getListPagingByEntity };
