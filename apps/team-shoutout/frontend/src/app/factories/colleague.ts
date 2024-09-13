import { faker } from '@faker-js/faker';
import { Factory } from 'fishery';
import { Colleague } from '../types/colleague';

// TODO: Export both a fake factory and a real factory maybe?

export default Factory.define<Colleague>(({ sequence }) => ({
  id: sequence,
  name: faker.person.fullName(),
  email: faker.internet.email(),
  department: faker.company.buzzNoun(),
  role: faker.company.catchPhraseNoun(),
  imagePath: faker.image.url(),
}));
