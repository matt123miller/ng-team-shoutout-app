import { ObjectId } from 'mongodb';

export interface Nomination {
  beTheExpert?: boolean;
  findASolution?: boolean;
  doTheRightThing?: boolean;
  successThroughPartnership?: boolean;
  everyPebbleMatters?: boolean;
  reason: string;
  colleagueId: ObjectId;
  date: Date;
}
