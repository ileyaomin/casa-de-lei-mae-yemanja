import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const gira = pgTable("gira", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});
