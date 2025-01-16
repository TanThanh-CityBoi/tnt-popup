import { ClientTCP } from '@nestjs/microservices';
import { isObject, isArray } from 'lodash';
import { RequestContext } from 'nestjs-request-context';
import { generateRequestId, ACTION, GENERAL_MESSAGE_PATTERN } from '../utils';
import { IResponsePaging } from '../interfaces';
import {
  DeepPartial,
  FindConditions,
  FindManyOptions,
  FindOneOptions,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export class ConsumerService<Entity> {
  private service: ClientTCP;
  private entityStr: string;
  private requestInfo: any;
  constructor(options: Object, entityStr: string) {
    this.service = new ClientTCP(options);
    this.entityStr = entityStr;
    const reqContext: any = RequestContext.currentContext.req;
    this.requestInfo = {
      reqUserId: reqContext.accountId || reqContext?.user?.data?.accountId || 0,
      requestId: reqContext.requestId || generateRequestId(),
      fromPackageName: process.env.npm_package_name,
    };
  }

  public async call(
    conditions: any,
    message = '',
    isFullResponse = false,
  ): Promise<any> {
    if (!conditions.SEND_SERVICE_TYPE) {
      conditions = {
        SEND_SERVICE_TYPE: 'SPECIAL',
        requestInfo: this.requestInfo,
        payload: conditions,
      };
    }
    const messageParttern = message || this.entityStr;
    const result = await this.service
      .send(messageParttern, conditions)
      .toPromise();
    this.service.close();
    if (isFullResponse) return result;
    if (isArray(result)) return result;
    if (isObject(result)) {
      return result.data || result.data === null ? result.data : result;
    }
    return result;
  }

  public async getByIds(ids: Array<any>): Promise<any> {
    const reqData = {
      SEND_SERVICE_TYPE: 'GENERAL',
      requestInfo: this.requestInfo,
      action: ACTION.GET_BY_IDS,
      entity: this.entityStr,
      payload: ids,
    };
    return this.call(reqData, GENERAL_MESSAGE_PATTERN);
  }

  public async getOne(
    conditions?: FindOneOptions<Entity> | FindConditions<Entity>,
  ): Promise<any> {
    const reqData = {
      SEND_SERVICE_TYPE: 'GENERAL',
      requestInfo: this.requestInfo,
      action: ACTION.GET_ONE,
      entity: this.entityStr,
      payload: conditions,
    };
    return this.call(reqData, GENERAL_MESSAGE_PATTERN);
  }

  public async getList(
    conditions: FindManyOptions<Entity> | FindConditions<Entity>,
  ): Promise<any> {
    const reqData = {
      SEND_SERVICE_TYPE: 'GENERAL',
      requestInfo: this.requestInfo,
      action: ACTION.GET_LIST,
      entity: this.entityStr,
      payload: conditions,
    };
    return this.call(reqData, GENERAL_MESSAGE_PATTERN);
  }

  public async getListPaging(conditions?: {
    pagination: any;
    query: {};
    filter: {};
    order: {};
  }): Promise<IResponsePaging> {
    const reqData = {
      SEND_SERVICE_TYPE: 'GENERAL',
      requestInfo: this.requestInfo,
      action: ACTION.GET_LIST_PAGING,
      entity: this.entityStr,
      payload: conditions,
    };
    return this.call(reqData, GENERAL_MESSAGE_PATTERN);
  }

  public async store(
    conditions?:
      | DeepPartial<Entity>
      | { data: DeepPartial<Entity>; checkExisted: Array<string> },
    isFullResponse = false,
  ): Promise<any> {
    const reqData = {
      SEND_SERVICE_TYPE: 'GENERAL',
      requestInfo: this.requestInfo,
      action: ACTION.STORE,
      entity: this.entityStr,
      payload: conditions,
    };
    return this.call(reqData, GENERAL_MESSAGE_PATTERN, isFullResponse);
  }

  public async storeArray(
    conditions?:
      | DeepPartial<Entity>[]
      | { data: DeepPartial<Entity>[]; checkExisted: Array<string> },
    isFullResponse = false,
  ): Promise<any> {
    const reqData = {
      SEND_SERVICE_TYPE: 'GENERAL',
      requestInfo: this.requestInfo,
      action: ACTION.STORE_ARRAY,
      entity: this.entityStr,
      payload: conditions,
    };
    return this.call(reqData, GENERAL_MESSAGE_PATTERN, isFullResponse);
  }

  public async update(
    conditions?: {
      conditions: FindConditions<Entity>;
      data: QueryDeepPartialEntity<Entity>;
    },
    isFullResponse = false,
  ): Promise<any> {
    const reqData = {
      SEND_SERVICE_TYPE: 'GENERAL',
      requestInfo: this.requestInfo,
      action: ACTION.UPDATE,
      entity: this.entityStr,
      payload: conditions,
    };
    return this.call(reqData, GENERAL_MESSAGE_PATTERN, isFullResponse);
  }
}
