import { ObjectId } from "bson";
import User from "./User";

export default class Profile {
  _id?: ObjectId = new ObjectId();
  createdAt?: Date = new Date();
  updatedAt?: Date = new Date();
  username: string;
  bio: string;
  thumbnail?: string;
  socialNetworks?: SocialNetwork[];
  contacts?: {
    phoneNumber?: number;
    email?: string;
  };
  uid: ObjectId;
  user?: User;

  constructor({
    username,
    bio,
    thumbnail,
    socialNetworks,
    contacts,
    uid,
  }: Profile) {
    this._id;
    this.updatedAt;
    this.createdAt;
    this.username = username;
    this.bio = bio;
    this.thumbnail = thumbnail;
    this.socialNetworks = socialNetworks;
    this.contacts = contacts;
    this.uid = uid;
    this.user;
  }
}
export class SocialNetwork {
  name: string;
  url: string;
  constructor({ name, url }: SocialNetwork) {
    this.name = name;
    this.url = url;
  }
}
