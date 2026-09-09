import { MongoClient } from 'mongodb'

const connectionUri = process.env.MONGODB_URI
const clientOptions = {}

if (!connectionUri) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
}

let mongoClientPromise

function createMongoClient() {
  const client = new MongoClient(connectionUri, clientOptions)
  return client.connect()
}

if (process.env.NODE_ENV === 'production') {
  mongoClientPromise = createMongoClient()
} else {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = createMongoClient()
  }
  mongoClientPromise = global._mongoClientPromise
}

export default mongoClientPromise
