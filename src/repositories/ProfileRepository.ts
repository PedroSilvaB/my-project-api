import { ObjectId } from "bson";
import { Database } from "../database/Database";
import Profile from "../entities/Profile";
import { IProfileRepository } from "./interfaces/IProfileRepository";

interface IProfileUnique {
  _id?: ObjectId;
  username?: string;
  uid?: ObjectId;
}
interface IProfileSelect {
  _id?: boolean;
  email?: boolean;
  name?: boolean;
  image?: boolean;
  createdAt?: boolean;
  updatedAt?: boolean;
  include?: {
    user?: boolean;
  };
}

export class ProfileRepository implements IProfileRepository {
  async exist({ username, _id, uid }: IProfileUnique): Promise<Boolean> {
    const db = new Database();
    await db.connect();
    const hasUserName = await db.profile.count({
      $or: [{ username }, { _id }, { uid }],
    });
    return !!hasUserName;
  }
  async findUnique(
    { _id, username }: IProfileUnique,
    select: IProfileSelect
  ): Promise<Profile | null> {
    const db = new Database();
    await db.connect();
    const profile = await db.profile.findOne({
      $or: [
        {
          _id,
        },
        {
          username,
        },
      ],
    });
    return profile;
  }
  async find({
    _id,
    username,
  }: {
    _id: ObjectId;
    username: string;
  }): Promise<Profile[]> {
    const db = new Database();
    await db.connect();
    const profiles = await db.profile
      .find(
        {
          $or: [
            {
              _id,
            },
            {
              username,
            },
          ],
        },
        { limit: 10, skip: 0, sort: { createdAt: -1 } }
      )
      .toArray();

    return profiles;
  }
  async create(profile: Profile): Promise<Profile> {
    const db = new Database();
    await db.connect();
    await db.profile.insertOne(profile);
    db.profile
      .createIndexes([
        { key: { username: 1 }, unique: true },
        { key: { uid: 1 }, unique: true },
      ])
      .then((res) => console.log(res));
    return profile;
  }
  async delete({ username, _id }: IProfileUnique): Promise<Boolean> {
    const db = new Database();
    await db.connect();
    const { acknowledged } = await db.profile.deleteOne({
      $or: [{ _id }, { username }],
    });
    return acknowledged;
  }
}
