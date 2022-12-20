// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Admin, Sponsor, Driver, Product } = initSchema(schema);

export {
  Admin,
  Sponsor,
  Driver,
  Product
};