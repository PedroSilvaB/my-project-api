import { Db, MongoClient } from "mongodb";
import { uri } from "../../config";
// Replace the uri string with your MongoDB deployment's connection string.

const client = new MongoClient(uri);

let cacheDb: Db | null;

const mongo = async () => {
  try {
    if (cacheDb) {
      return {
        client,
        database: cacheDb,
      };
    }
    await client.connect();
    const db = client.db("blog-test");
    cacheDb = db;
    return {
      client,
      database: db,
    };
  } catch (error) {
    throw error;
  }
};

export default mongo;
