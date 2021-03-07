import { insertIntoTables } from '../src/utils/queryFunctions';

before(async () => {
  await insertIntoTables();
});
