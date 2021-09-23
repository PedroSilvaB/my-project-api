import { ObjectId } from "bson";
import User from "./User";

export default class Skill {
  _id?: ObjectId = new ObjectId();
  createdAt?: Date = new Date();
  updatedAt?: Date = new Date();
  name: string;
  image: string;
  tags: string[];
  description: string;
  typeSkill: "soft" | "hard";
  uid: ObjectId;
  user?: User;

  constructor({ name, image, description, tags, typeSkill, user, uid }: Skill) {
    this._id;
    this.updatedAt;
    this.createdAt;
    this.name = name;
    this.image = image;
    this.tags = tags;
    this.description = description;
    this.typeSkill = typeSkill;
    this.user = user;
    this.uid = uid;
  }
}
