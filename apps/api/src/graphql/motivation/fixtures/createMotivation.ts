import { Motivation } from "../../../models/Motivation";

export async function createMotivation() {
  const i = (await Motivation.countDocuments()) + 1;
  const motivation = await Motivation.create({
    author: `author#${i}`,
    phrase: `phrase#${i}`
  });
  return motivation;
}