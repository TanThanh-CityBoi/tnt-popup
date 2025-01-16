import { EntitySchema } from 'typeorm';
const getEntitiesPath = (DB_NAME: string): Array<string> => {
  return [
    `node_modules/@tnt-topup/entities/lib/entities/${DB_NAME}/**.entity.js`,
    'dist/**/**.entity{.ts,.js}',
  ];
};

const getListEntities = (DB_NAME: string): Array<EntitySchema> => {
  const objEntities = require(`../entities/${DB_NAME}`);
  return Object.values(objEntities);
};

export { getEntitiesPath, getListEntities };
