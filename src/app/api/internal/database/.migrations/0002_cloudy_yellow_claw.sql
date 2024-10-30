CREATE TABLE IF NOT EXISTS "frequency" (
	"id" text PRIMARY KEY NOT NULL,
	"gira_id" text NOT NULL,
	"assistance_id" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "frequency" ADD CONSTRAINT "frequency_gira_id_gira_id_fk" FOREIGN KEY ("gira_id") REFERENCES "public"."gira"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "frequency" ADD CONSTRAINT "frequency_assistance_id_assistance_id_fk" FOREIGN KEY ("assistance_id") REFERENCES "public"."assistance"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
