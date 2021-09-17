import User from "../entities/User";
import mongo from "../database";
import { DeleteResult, Filter, FindCursor, FindOptions } from "mongodb";

class UsersRepository {
  static async findUnique(
    query: Filter<User>,
    options?: FindOptions<User>
  ): Promise<User | null> {
    const { client, database } = await mongo();
    try {
      const collection = database.collection<User>("users");

      const user = await collection.findOne(query, options);
      return user;
    } catch (error) {
      throw error;
    } finally {
      client.close();
    }
  }
  static async findMany(
    query: Filter<User>,
    options?: FindOptions<User>
  ): Promise<User[] | null[]> {
    const { client, database } = await mongo();
    try {
      const collection = database.collection<User>("users");

      const user = await collection.find(query, options).toArray();
      return user;
    } catch (error) {
      throw error;
    } finally {
      client.close();
    }
  }
  static async create(user: User): Promise<User> {
    const { client, database } = await mongo();
    try {
      const collection = database.collection<User>("users");
      await collection.createIndex({ email: 1 }, { unique: true });
      await collection.insertOne(user);
      return user;
    } catch (error) {
      throw error;
    } finally {
      client.close();
    }
  }
  static async delete(user: Filter<User>): Promise<DeleteResult> {
    const { client, database } = await mongo();
    try {
      const collection = database.collection<User>("users");
      const data = await collection.deleteOne(user);
      return data;
    } catch (error) {
      throw error;
    } finally {
      client.close();
    }
  }
}
export default UsersRepository;
