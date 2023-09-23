import { createId } from '@paralleldrive/cuid2';
import { varchar, pgTable } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-typebox';
import { Type } from '@sinclair/typebox';

export const hello = pgTable('Hello', {
  id: varchar('id').primaryKey().$defaultFn(createId),
  data: varchar('data').notNull(),
});

export const helloInsertSchema = createInsertSchema(hello, {
  id: Type.Optional(Type.String({ minLength: 24 })),
  data: Type.String({ minLength: 1 }),
});
export type HelloInsert = typeof helloInsertSchema.static;

export const helloSelectSchema = createSelectSchema(hello);
export type HelloSelect = typeof helloSelectSchema.static;
