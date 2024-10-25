import { Collection, Db } from 'mongodb';
import { Colleague } from '../types/colleague';
import { Nomination } from '../types/nomination';
import { createClient } from './client';
import { seedColleagues } from './seed-colleages';
import { seedNominations } from './seed-nominations';

const dbName = 'team-shoutout';

type MongoDb = Db & {
  colleagues: Collection<Colleague>;
  nominations: Collection<Nomination>;
};

let db: MongoDb;

export async function getDb() {
  if (!db) {
    db = await createDb();
  }
  return db;
}

async function createDb(): Promise<MongoDb> {
  const client = await createClient();

  const db = client.db(dbName);

  return setup(db);
}

async function setup(db: Db): Promise<MongoDb> {
  const colleagues = db.collection<Colleague>('colleagues');
  const nominations = db.collection<Nomination>('nominations');

  colleagues.createIndex({ email: 1 }, { unique: true });

  //@ts-expect-error patching db object
  db.colleagues = colleagues;
  //@ts-expect-error patching db object
  db.nominations = nominations;

  await seedColleagues(colleagues);
  await seedNominations(nominations);

  // It's nowe been patched with the new values
  return db as MongoDb;
}
