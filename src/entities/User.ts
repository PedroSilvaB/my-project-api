import { ObjectId } from "bson";
export default class User {
  _id?: ObjectId = new ObjectId();
  createdAt?: Date = new Date();
  updatedAt?: Date = new Date();
  name: string;
  email: string;
  role?: "ADMIN" | "AUTHOR" | "USER" = "USER";
  image?: string;
  constructor({ name, email, image, role }: User) {
    this._id;
    this.role = role;
    this.name = name;
    this.email = email;
    this.image = image;
  }
}
