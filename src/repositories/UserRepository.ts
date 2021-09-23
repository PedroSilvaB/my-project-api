import { ObjectId } from "bson";
import { Database } from "../database/Database";
import User from "../entities/User";
import { projection } from "../utils/projection";
import { IUserRepository } from "./interfaces/IUserRepository";

interface IUserUnique {
  _id?: ObjectId;
  email?: string;
}
interface IUserSelect {
  id?: boolean;
  email?: boolean;
  name?: boolean;
  image?: boolean;
  createdAt?: boolean;
  updatedAt?: boolean;
  role?: boolean;
  include?: {
    post?: boolean;
    skills?: boolean;
  };
}

export class UserRepository implements IUserRepository {
  async exist({ email, _id }: IUserUnique): Promise<Boolean> {
    const db = new Database();
    await db.connect();
    const hasUser = await db.user.count({
      $or: [{ email }, { _id }],
    });
    return !!hasUser;
  }
  async findUnique(
    { _id, email }: IUserUnique,
    { include, ...select }: IUserSelect
  ): Promise<User | null> {
    const projectionData = projection(select);
    const db = new Database();
    await db.connect();
    const query = {
      $or: [
        {
          _id,
        },
        {
          email,
        },
      ],
    };
    if (include?.post && include?.skills) {
      const user = await db.user
        .aggregate([
          {
            $match: query,
          },
          { $project: projectionData },
        ])
        .toArray();
      return user[0];
    } else {
      const user = await db.user.findOne(query, { projection: projectionData });
      return user;
    }
  }
  async find(
    {
      _id,
      name,
      email,
    }: {
      _id: ObjectId;
      email: string;
      name: string;
    },
    { include, ...select }: IUserSelect
  ): Promise<User[]> {
    const db = new Database();
    await db.connect();
    const projectionData = projection(select);
    const users = await db.user
      .find(
        {
          $or: [
            {
              _id,
            },
            {
              email,
            },
            {
              name,
            },
          ],
        },
        {
          projection: projectionData,
          limit: 10,
          skip: 0,
          sort: { createdAt: -1 },
        }
      )
      .toArray();

    return users;
  }
  async create(user: User): Promise<User> {
    const db = new Database();
    await db.connect();
    await db.user.insertOne(user);
    db.user
      .createIndexes([
        { key: { email: 1 }, unique: true },
        { key: { name: 1 } },
      ])
      .then((res) => console.log(res));
    return user;
  }
  async delete({ email, _id }: IUserUnique): Promise<Boolean> {
    const db = new Database();
    await db.connect();
    const { acknowledged } = await db.user.deleteOne({
      $or: [{ _id }, { email }],
    });
    return acknowledged;
  }
}
