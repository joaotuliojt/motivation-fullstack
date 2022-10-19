import { faker } from '@faker-js/faker';

export function generateMotivations(i: number) {

  const motivations = [];

  for (let index = 1; index <= i; index++) {
    const newMotivatin = {
      author: faker.name.fullName(),
      phrase: faker.lorem.paragraph(10),
      id: faker.random.alphaNumeric(10)
    }
    motivations.push(newMotivatin)
  }

  return motivations
}