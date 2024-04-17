import { Db } from 'mongodb';

export async function getAllColleagues(db: Db) {
  const colleagues = db.collection('colleagues').find({}).toArray();

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return colleagues;
}
