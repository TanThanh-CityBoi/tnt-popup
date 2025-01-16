# @tnt-topup/consumer-gateway

 Provide a 'consumer()' method, which are intended to send request from gateway to service.

## Installation

* npm
```sh
npm install @tnt-topup/consumer-gateway

npm install @tnt-topup/entities

```

* yarn
```sh
yarn add @tnt-topup/consumer-gateway

yarn add @tnt-topup/entities

```

## Usage

```sh
   // Method suport
    consumer([CONSUMER_CONST])|.getOne()        // find one
                              |.getByIds()      // find by array Id
                              |.getList()       // find
                              |.getListPaging() // find with paging
                              |.update()        // update
                              |.store()         // create new
                              |.storeArray()    // store list
                              
    // the consumer method takes one arguments is CONSUMER_CONSTANT, which was exported from package @tnt-topup/entities
```

### Example
### app.module.ts

```sh
import { RequestContextModule } from '@tnt-topup/consumer-gateway';

@Module({
    import: [RequestContextModule],
    controllers: [],
    providers: [AppService]
})

```

### app.service.ts

 ```sh
import { consumer } from '@tnt-topup/consumer-gateway';
import { _AUTH, _ACCOUNT } from '@tnt-topup/entities';

@Injectable()
export class AppService {

  // special message
  public async login(username: string, password: string) {
    return consumer(_AUTH).call({ username, password }, 'login');
  }
  
  // general message
  public async getUser(username: string) {
    return consumer(_ACCOUNT).getOne({ username });
  }
}
 ```
