import { ObjectId } from "bson";

export default class Category {
  _id?: ObjectId = new ObjectId();
  createdAt?: Date = new Date();
  updatedAt?: Date = new Date();
  name: string;
  slug: string;
  thumbnail: string;
  image: string;
  description: string;
  highlight?: boolean = false;
  active?: boolean = true;
  tags?: [string];
  constructor({
    description,
    image,
    name,
    slug,
    tags,
    thumbnail,
    active,
    highlight,
  }: Category) {
    this._id;
    this.createdAt;
    this.updatedAt;
    this.name = name;
    this.slug = slug;
    this.thumbnail = thumbnail;
    this.image = image;
    this.description = description;
    this.tags = tags;
    this.active = active;
    this.highlight = highlight;
  }
}
