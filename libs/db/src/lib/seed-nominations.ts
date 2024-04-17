import { Collection } from 'mongodb';
import { Nomination } from '../types/nomination';

export async function seedNominations(collection: Collection<Nomination>) {
  const estimatedCount = await collection.estimatedDocumentCount({});

  if (estimatedCount === 0) {
    // collection.insertMany([]);
  } else {
    console.log(`${estimatedCount} Nominations already exist in the database`);
  }
}
