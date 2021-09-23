import { ObjectId } from "bson";
import { Database } from "../src/database/Database";
import User from "../src/entities/User";
import { CreateProfileService } from "../src/modules/createProfile/CreateProfileService";
import { CreateUserService } from "../src/modules/createUser/CreateUserService";
import { ProfileRepository } from "../src/repositories/ProfileRepository";
import { UserRepository } from "../src/repositories/UserRepository";

describe("Create user", () => {
  const userRepository = new UserRepository();
  const userCreate = new CreateUserService(userRepository);
  const userData = {
    name: "Pedro",
    email: "pedrosilva@gmail.com",
  };
  let newUser: User;
  const profileRepository = new ProfileRepository();
  const profileCreate = new CreateProfileService(
    userRepository,
    profileRepository
  );
  it("should be able to create a new user", async () => {
    const user = await userCreate.execute(userData);
    expect(user).toHaveProperty("_id");
    newUser = user;
    expect(user.email).toBe(userData.email);
  });
  it("should not be able to create an existing user", async () => {
    await expect(userCreate.execute(userData)).rejects.toEqual(
      new Error("User already exists!")
    );
  });
  it("should be able to delete an existing user", () => {});
  it("should be able to create a new profile", async () => {
    const profile = await profileCreate.execute({
      bio: "test",
      uid: new ObjectId(newUser?._id),
      username: "pedrosilva",
    });
    expect(profile).toHaveProperty("_id");
    console.log({ profile, newUser });
    expect(profile.username).toBe("pedrosilva");
  });
  it("should not be able to create an existing profile", async () => {
    await expect(
      profileCreate.execute({
        bio: "test",
        uid: new ObjectId(newUser?._id),
        username: "pedrosilva",
      })
    ).rejects.toEqual(new Error("User profile already exists!"));
  });
  it("should not be able to create an existing profile", async () => {
    await expect(
      profileCreate.execute({
        bio: "test",
        uid: new ObjectId("614cfdd344d4dba71c41871b"),
        username: "pedrosilvakb",
      })
    ).rejects.toEqual(new Error("User not exists!"));
  });
  it("desconect database", async () => {
    const db = new Database();
    await db.connect();

    const desconect = await db.client.close();
    expect(desconect).toBeUndefined();
  });
});
