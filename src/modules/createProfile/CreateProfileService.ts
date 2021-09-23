import Profile from "../../entities/Profile";
import { ProfileRepository } from "../../repositories/ProfileRepository";
import { UserRepository } from "../../repositories/UserRepository";

export class CreateProfileService {
  constructor(
    private userRepository: UserRepository,
    private profileRepository: ProfileRepository
  ) {}
  async execute({
    uid,
    username,
    bio,
    thumbnail,
    contacts,
    socialNetworks,
  }: Profile) {
    const profileAlreadyExist = await this.profileRepository.exist({
      username,
      uid,
    });
    const userAlreadyExist = await this.userRepository.exist({ _id: uid });
    if (profileAlreadyExist) {
      throw new Error("User profile already exists!");
    }
    if (!userAlreadyExist) {
      throw new Error("User not exists!");
    }

    const authorCreate = new Profile({
      bio,
      username,
      thumbnail,
      contacts,
      socialNetworks,
      uid,
    });
    const user = await this.profileRepository.create(authorCreate);
    return user;
  }
}
