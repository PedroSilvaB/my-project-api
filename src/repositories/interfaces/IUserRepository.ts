import { ObjectId } from "bson";
import User from "../../entities/User";

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
export interface IUserRepository {
  exist({ email, _id }: IUserUnique): Promise<Boolean>;
  findUnique(user: IUserUnique, select: IUserSelect): Promise<User | null>;
  find(
    user: {
      _id: ObjectId;
      email: string;
      name: string;
    },
    select: IUserSelect
  ): Promise<User[]>;
  create(user: User): Promise<User>;
  delete(user: IUserUnique): Promise<Boolean>;
}
