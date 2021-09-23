import mongo from ".";
import { Collection, MongoClient } from "mongodb";
import Profile from "../entities/Profile";
import User from "../entities/User";
import Skill from "../entities/Skill";
import Post from "../entities/Post";
import Category from "../entities/Category";
import { Permission } from "../entities/Permission";
export class Database {
  profile!: Collection<Profile>;
  client!: MongoClient;
  user!: Collection<User>;
  skill!: Collection<Skill>;
  post!: Collection<Post>;
  category!: Collection<Category>;
  permission!: Collection<Permission>;
  async connect(): Promise<void> {
    const { client, database } = await mongo();
    try {
      this.client = client;
      this.profile = database.collection<Profile>("profiles");
      this.user = database.collection<User>("users");
      this.skill = database.collection<Skill>("skills");
      this.post = database.collection<Post>("posts");
      this.category = database.collection<Category>("categories");
      this.permission = database.collection<Permission>("permissions");
    } catch (error) {
      throw error;
    }
  }
}
