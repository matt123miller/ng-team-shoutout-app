import { Collection } from 'mongodb';
import { Colleague } from '../types/colleague';

export async function seedColleagues(collection: Collection<Colleague>) {
  const estimatedCount = await collection.estimatedDocumentCount({});

  if (estimatedCount === 0) {
    collection.insertMany([
      {
        id: 1,
        name: 'Matt Miller',
        department: 'CFDev',
        role: 'Software Engineer',
        email: 'matt@pebble.tv',
        imagePath: 'https://via.placeholder.com/150',
        nominations: [],
      },
      {
        id: 2,
        name: 'Tim Penfold',
        department: 'CFDev',
        role: 'Software Engineering Manager',
        email: 'tim@pebble.tv',
        imagePath: 'https://via.placeholder.com/150',
        nominations: [],
      },
      {
        id: 3,
        name: 'Nick Batten',
        department: 'Engineering',
        role: 'Software Engineer',
        email: 'nick@pebble.tv',
        imagePath: 'https://via.placeholder.com/150',
        nominations: [],
      },
    ]);
  } else {
    console.log(`${estimatedCount} Colleagues already exist in the database`);
  }
}
