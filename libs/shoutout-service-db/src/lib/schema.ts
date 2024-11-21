import { randomUUID } from 'crypto';
import { pgTable as table, integer, timestamp, varchar } from "drizzle-orm/pg-core"

const timestamps = {
  updated_at: timestamp(),
  created_at: timestamp().defaultNow().notNull(),
  deleted_at: timestamp(),
}

export const nominations = table('nominations', {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    colleague: integer().references(() => colleagues.id),
  ...timestamps,
});

export const colleagues = table('colleagues', {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }),
    ...timestamps,
});

  id: number;
  name: string;
  department: string;
  role: string;
  email: string;
  imagePath: string;
  nominations: ObjectId[];