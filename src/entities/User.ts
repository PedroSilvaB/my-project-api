export default class User {
  name: string;
  email: string;
  image?: string | undefined;
  constructor({ name, email, image }: User) {
    this.name = name;
    this.email = email;
    this.image = image;
  }
}
