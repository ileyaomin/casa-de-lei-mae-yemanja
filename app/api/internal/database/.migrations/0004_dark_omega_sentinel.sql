CREATE TABLE IF NOT EXISTS "suns" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"it_answer" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
