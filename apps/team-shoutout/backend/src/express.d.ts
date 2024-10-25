import { type MongoDb } from '@m11r/db';

export interface Locals {
  dbClient: MongoDb;
  errors?: Array<{ code?: number; message: string }>;
  title?: string;
}

export as namespace Express;
export = Express;

declare module 'express-serve-static-core' {
  interface Application {
    typedLocals?: Locals;
  }
}

declare namespace Express {
  export interface Response {
    typedLocals: Locals;
  }
  export interface Application {
    typedLocals: Locals;
    locals: Locals;
  }
}
