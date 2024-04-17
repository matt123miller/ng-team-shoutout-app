import { MongoClient } from 'mongodb';

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'team-shoutout';

// Create a new MongoClient
// Use connect method to connect to the Server
export function createClient() {
  return new MongoClient(url, {}).connect().then((client) => {
    console.log('Connected successfully to server');

    return client;
  });
}
