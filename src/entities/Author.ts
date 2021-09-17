import Profile from "./Profile";
import User from "./User";

export default class Author {
  name: string;
  email: string;
  image?: string | undefined;
  username: string;
  bio: string;
  thumbnail?: string | undefined;
  socialNetworks?: { name: string; url: string }[] | undefined;
  private constructor(
    { name, image, email }: User,
    { bio, socialNetworks, thumbnail, username }: Profile
  ) {
    this.name = name;
    this.email = email;
    this.image = image;
    this.username = username;
    this.bio = bio;
    this.thumbnail = thumbnail;
    this.socialNetworks = socialNetworks;
  }
  static create(user: User, profile: Profile) {
    return new Author(user, profile);
  }
}
