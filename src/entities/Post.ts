import { ObjectId } from "bson";
import Category from "./Category";

export default class Post {
  _id?: ObjectId = new ObjectId();
  createdAt?: Date = new Date();
  updatedAt?: Date = new Date();
  title: string;
  slug: string;
  tags: string[];
  author: ObjectId;
  thumbnail: string;
  description: string;
  content: string;
  highlight?: boolean = false;
  published?: boolean = false;
  publishedAt?: Date;
  viwes?: number;
  shares?: number;
  categories?: ObjectId[] | Category[];
  constructor({
    description,
    highlight,
    tags,
    title,
    author,
    content,
    published,
    thumbnail,
    slug,
  }: Post) {
    this._id;
    this.updatedAt;
    this.createdAt;
    this.highlight = highlight;
    this.content = content;
    this.author = author;
    this.description = description;
    this.thumbnail = thumbnail;
    this.tags = tags;
    this.slug = slug;
    this.title = title;
    this.published = published;
    this.publishedAt = published ? new Date() : undefined;
    this.viwes;
    this.shares;
  }
}
