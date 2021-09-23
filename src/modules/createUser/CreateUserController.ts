import { CreateUserService } from "./CreateUserService";

export class CreateUserController {
  constructor(private createUser: CreateUserService) {}

  async handle(request: any, response: any) {
    const { email, name, image } = request.body;
    const user = await this.createUser.execute({ email, name, image });

    return response.json(user);
  }
}
