export default class Profile {
  username: string;
  bio: string;
  thumbnail?: string | undefined;
  socialNetworks?:
    | {
        name: string;
        url: string;
      }[]
    | undefined;
  constructor({ username, bio, thumbnail, socialNetworks }: Profile) {
    this.username = username;
    this.bio = bio;
    this.thumbnail = thumbnail;
    this.socialNetworks = socialNetworks;
  }
}
