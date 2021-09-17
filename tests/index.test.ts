import Author from "../src/entities/Author";
import Profile from "../src/entities/Profile";
import User from "../src/entities/User";
import UsersRepository from "../src/repositories/UsersRepository";

describe("User", () => {
  const user = new User({
    name: "Pedro",
    email: "pedrosilvatest@gmail.com",
  });
  const profile = new Profile({
    bio: "test",
    username: "pedrosilva",
  });
  const author = Author.create(user, profile);

  it("New User", () => {
    expect(user.name).toBe("Pedro");
  });
  it("New Profile", () => {
    expect(profile.username).toBe("pedrosilva");
  });
  it("New Author", () => {
    expect(author.name).toBe("Pedro");
  });
  it("New User db", async () => {
    const newUser = await UsersRepository.create(user);
    expect(newUser.email).toBe(user.email);
  });
  it("Find User db", async () => {
    const newUser = await UsersRepository.findUnique({ name: user.name });
    expect(newUser?.name).toBe(user.name);
  });
  it("Find Many User db", async () => {
    const newUser = await UsersRepository.findMany({ email: user.email });
    expect(newUser[0]?.email).toBe(user.email);
  });
  it("Delete User db", async () => {
    const newUser = await UsersRepository.delete({ email: user.email });
    expect(newUser.acknowledged).toBe(true);
  });
});
