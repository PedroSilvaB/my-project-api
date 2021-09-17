import { MongoClient } from "mongodb";
import { uri } from "../../config";
// Replace the uri string with your MongoDB deployment's connection string.

const client = new MongoClient(uri);

const mongo = async () => {
  try {
    await client.connect();
    const db = client.db("blog-test");
    return {
      client,
      database: db,
    };
  } catch (error) {
    throw error;
  }
};

export default mongo;
