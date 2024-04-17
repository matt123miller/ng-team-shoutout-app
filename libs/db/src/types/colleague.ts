import { ObjectId } from 'mongodb';

export interface Colleague {
  id: number;
  name: string;
  department: string;
  role: string;
  email: string;
  imagePath: string;
  nominations: ObjectId[];
}
