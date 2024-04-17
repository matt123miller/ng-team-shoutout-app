import { Db } from 'mongodb';
import { Colleague } from '../types/colleague';
import { Nomination } from '../types/nomination';
import { createClient } from './client';
import { seedColleagues } from './seed-colleages';
import { seedNominations } from './seed-nominations';

const dbName = 'team-shoutout';

let db: Db;

export async function createDb() {
  const client = await createClient();

  const db = client.db(dbName);

  await setup(db);
  return db;
}

async function setup(db: Db) {
  const colleagues = db.collection<Colleague>('colleagues');
  const nominations = db.collection<Nomination>('nominations');

  colleagues.createIndex({ email: 1 }, { unique: true });

  //@ts-expect-error patching db object
  db.colleagues = colleagues;
  //@ts-expect-error patching db object
  db.nominations = nominations;

  await seedColleagues(colleagues);
  await seedNominations(nominations);
}
