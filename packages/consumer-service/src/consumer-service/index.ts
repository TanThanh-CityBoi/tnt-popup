import { ConsumerService } from './consumer.service';

export async function FunctionParser(data: any) {
  const { action, entity, payload } = data;
  const appService = new ConsumerService();
  const FUNCTION_PARSER = {
    GET_BY_IDS: () => appService.getByIds(payload, entity),
    GET_ONE: () => appService.getOne(payload, entity),
    GET_LIST: () => appService.getList(payload, entity),
    GET_LIST_PAGING: () => appService.getListPaging(payload, entity),
    STORE: () => appService.store(payload, entity),
    STORE_ARRAY: () => appService.storeArray(payload, entity),
    UPDATE: () => appService.update(payload, entity),
  };
  return await FUNCTION_PARSER[action]();
}
