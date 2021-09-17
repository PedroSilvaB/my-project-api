class Skill {
  name: string;
  image: string;
  tags: string[];
  description: string;
  typeSkill: "soft" | "hard";
  constructor({ name, image, description, tags, typeSkill }: Skill) {
    this.name = name;
    this.image = image;
    this.tags = tags;
    this.description = description;
    this.typeSkill = typeSkill;
  }
}
