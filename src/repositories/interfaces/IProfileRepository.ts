import { ObjectId } from "bson";
import Profile from "../../entities/Profile";

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

export interface IProfileRepository {
  exist(profile: IProfileUnique): Promise<Boolean>;
  findUnique(
    profile: IProfileUnique,
    select: IProfileSelect
  ): Promise<Profile | null>;
  find(
    profile: {
      _id: ObjectId;
      username: string;
    },
    select: IProfileSelect
  ): Promise<Profile[]>;
  create(profile: Profile): Promise<Profile>;
  delete(profile: IProfileUnique): Promise<Boolean>;
}
