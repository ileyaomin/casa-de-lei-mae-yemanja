CREATE TYPE "public"."type" AS ENUM('default', 'child', 'old');--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "assistance" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"address" text NOT NULL,
	"reason" text NOT NULL,
	"type" "type" DEFAULT 'default',
	"who_indicated" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
