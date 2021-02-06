const dbName = 'comments';

class Db {
    dblocal = `mongodb://localhost/${dbName}`;
    dbdeprecado = { useNewUrlParser: true, useUnifiedTopology: true };
}
export const db = new Db();