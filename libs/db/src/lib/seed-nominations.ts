import { Collection } from 'mongodb';
import { Nomination } from '../types/nomination';

export async function seedNominations(collection: Collection<Nomination>) {
  const estimatedCount = await collection.estimatedDocumentCount({});

  if (estimatedCount === 0) {
    const insertArray: Nomination[] = [
      {
        beTheExpert: true,
        // I need to provide all of them? 
        // Or set them to false?
        // Can you do optional fields easily?
      },
    ];
    collection.insertMany([{}]);
  } else {
    console.log(`${estimatedCount} Nominations already exist in the database`);
  }
}
