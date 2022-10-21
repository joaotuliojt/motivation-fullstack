import { IMotivation, Motivation } from "../../models/Motivation";

export async function loadAll() {
  const motivations = await Motivation.find();
  return motivations
}