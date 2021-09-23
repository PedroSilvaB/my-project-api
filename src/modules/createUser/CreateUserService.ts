import User from "../../entities/User";
import { UserRepository } from "../../repositories/UserRepository";
interface IUserRequest {
  name: string;
  email: string;
  image?: string;
}
export class CreateUserService {
  constructor(private userRepository: UserRepository) {}
  async execute({ email, image, name }: IUserRequest) {
    const userAlreadyExist = await this.userRepository.exist({ email });

    if (userAlreadyExist) {
      throw new Error("User already exists!");
    }

    const userCreate = new User({ email, name, image });
    const user = await this.userRepository.create(userCreate);
    return user;
  }
}
