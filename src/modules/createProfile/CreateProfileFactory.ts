//import { ProfileRepository } from "../../repositories/ProfileRepository";
import { ProfileRepository } from "../../repositories/ProfileRepository";
import { UserRepository } from "../../repositories/UserRepository";
import { CreateProfileController } from "./CreateProfileController";
import { CreateProfileService } from "./CreateProfileService";

export const CreateProfileFactory = () => {
  const userRepository = new UserRepository();
  const profileRepository = new ProfileRepository();
  const createAuthor = new CreateProfileService(
    userRepository,
    profileRepository
  );
  const createAuthorController = new CreateProfileController(createAuthor);
  return createAuthorController;
};
