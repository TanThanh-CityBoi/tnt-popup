# `@tnt-topup/consumer-service`

Use in service, provide a method to handle general requests from the gateway (getOne, getList ....)

## Installation

* npm
```sh
npm install @tnt-topup/consumer-service

npm install @tnt-topup/entities

```

* yarn
```sh
yarn add @tnt-topup/consumer-gateway

yarn add @tnt-topup/entities

```

## Usage

### app.module.ts

```sh
import { AppController } from '///path'
import { getEntitiesPath, getListEntities } from '@tnt-topup/entities';

@Module({
  imports: [
   TypeOrmModule.forRoot({
      type: 'mysql',
      host: [HOST],
      port: [PORT],
      username: [MYSQL_USERNAME],
      password: [MYSQL_PASSWORD],
      database: [DB_NAME],
      entities: getEntitiesPath([DB_NAME]),
      synchronize: false,
      logging: process.env.ENV == 'local',
      timezone: [TIME_ZONE],
    }),
    TypeOrmModule.forFeature(getListEntities([DB_NAME])),
    ],
   controllers: [AppController],
   providers: [],
})

```
### app.controller.ts

```sh
import { Controller } from '@nestjs/common';
import * as TntEntities from '@tnt-topup/entities';
import { MessagePattern } from '@nestjs/microservices';
import {
  FunctionParser,
  GENERAL_MESSAGE_PATTERN,
} from '@tnt-topup/consumer-service';

@Controller()
export class AppController {

  @MessagePattern(GENERAL_MESSAGE_PATTERN)
  public async generalMessageParttern(data) {
    const { entity } = data;
    const [, , _entity] = TntEntities[`${entity}`];
    return FunctionParser(Object.assign(data, { entity: _entity }));
  }
  
}

```
