import { ObjectId } from "bson";
import { CreateProfileService } from "./CreateProfileService";

export class CreateProfileController {
  constructor(private createProfile: CreateProfileService) {}

  async handle(request: Request, response: any) {
    const { username, uid, bio, contacts, socialNetworks, thumbnail }: any =
      request.body;
    const user = await this.createProfile.execute({
      uid: new ObjectId(uid),
      username,
      bio,
      contacts,
      socialNetworks,
      thumbnail,
    });
    return response.json(user);
  }
}
