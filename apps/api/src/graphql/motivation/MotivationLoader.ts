import { IMotivation, Motivation } from "../../models/Motivation";

export async function loadAll() {
  const motivations = await Motivation.find();
  return motivations
}

export async function getOne(id: string) {
  const motivation = await Motivation.findOne({ _id: id });
  return motivation
}