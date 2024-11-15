import { createId } from "@paralleldrive/cuid2";
import { boolean, pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const giras = pgTable("giras", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  name: text("name").notNull(),
  responsibleId: text("responsible_id")
    .references(() => sons.id)
    .notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const assistanceTypeEnum = pgEnum("type", ["default", "child", "old"]);

export const assistance = pgTable("assistance", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  name: text("name").notNull(),
  email: text("email").notNull(),
  address: text("address").notNull(),
  reason: text("reason").notNull(),
  type: assistanceTypeEnum().default("default").notNull(),
  whoIndicated: text("who_indicated"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const frequencies = pgTable("frequencies", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
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

export const sons = pgTable("sons", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  name: text("name").notNull(),
  itAnswer: boolean("it_answer").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const passes = pgTable("passes", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  giraId: text("gira_id")
    .references(() => giras.id)
    .notNull(),
  assistanceId: text("assistance_id")
    .references(() => assistance.id)
    .notNull(),
  sonsId: text("sons_id")
    .references(() => sons.id)
    .notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const queries = pgTable("queries", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  giraId: text("gira_id")
    .references(() => giras.id)
    .notNull(),
  assistanceId: text("assistance_id")
    .references(() => assistance.id)
    .notNull(),
  sonsId: text("sons_id")
    .references(() => sons.id)
    .notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const donations = pgTable("donations", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  giraId: text("gira_id")
    .references(() => giras.id)
    .notNull(),
  assistanceId: text("assistance_id")
    .references(() => assistance.id)
    .notNull(),
  sonsId: text("sons_id")
    .references(() => sons.id)
    .notNull(),
  items: text("items"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});
