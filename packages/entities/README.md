# `@tnt-topup/entities`

Provide entities and constants

## Installation

* npm
```sh
npm install @tnt-topup/entities
```

* yarn
```sh
yarn add @tnt-topup/entities
```

## Usage
 
 * constants, methods suport
 
```sh
  import { ENTITY_NAME } from '@tnt-topup/entities'
  // get entity
  
  import { getEntitiesPath, getListEntities } from '@tnt-topup/entities';
  // getEntitiesPath( [DB_NAME] ) : get path of entities
  // getListEntities( [DB_NAME] ) : get list entity
```

## Development

### Add new entity

* create an entity file with path src/entities/[DATABASE_NAME]/[file_name].entity.ts
* export it in index.ts file
* create a consumer constant with new entity
* Example: add new entity with name: Account in database tp-auth

```sh
// src/entities/tp-auth/index.ts
export * from './account.entity';


// create new consumer constant
// src/constant/auth.constant.ts
import { Account } from '../entities'
import { consumerConst } from '../utils';

export const _ACCOUNT: consumerConst<Account> = ['AUTH', 'ACCOUNT', Account];
```
