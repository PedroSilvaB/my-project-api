import { ObjectId } from "bson";

export class Permission {
  _id?: ObjectId = new ObjectId();
  uid: ObjectId;
  user?: {
    create?: boolean;
    read?: boolean;
    update?: boolean;
    delete?: boolean;
  };
  post?: {
    create?: boolean;
    read?: boolean;
    update?: boolean;
    delete?: boolean;
  };
  profile?: {
    create?: boolean;
    read?: boolean;
    update?: boolean;
    delete?: boolean;
  };
  category?: {
    create?: boolean;
    read?: boolean;
    update?: boolean;
    delete?: boolean;
  };
  skill?: {
    create?: boolean;
    read?: boolean;
    update?: boolean;
    delete?: boolean;
  };
  permission?: {
    create?: boolean;
    read?: boolean;
    update?: boolean;
    delete?: boolean;
  };

  constructor({
    uid,
    profile,
    category,
    permission,
    post,
    skill,
    user,
  }: Permission) {
    this._id;
    this.uid = uid;
    this.user = user;
    this.post = post;
    this.profile = profile;
    this.category = category;
    this.skill = skill;
    this.permission = permission;
  }
}
