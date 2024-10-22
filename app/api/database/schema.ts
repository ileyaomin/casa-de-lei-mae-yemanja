import { pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const giras = pgTable("giras", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const assistanceTypeEnum = pgEnum("type", ["default", "child", "old"]);

export const assistance = pgTable("assistance", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  address: text("address").notNull(),
  reason: text("reason").notNull(),
  type: assistanceTypeEnum().default("default"),
  whoIndicated: text("who_indicated"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const frequencies = pgTable("frequencies", {
  id: text("id").primaryKey(),
  giraId: text("gira_id")
    .references(() => giras.id)
    .notNull(),
  assistanceId: text("assistance_id")
    .references(() => assistance.id)
    .notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});