CREATE TABLE IF NOT EXISTS "donations" (
	"id" text PRIMARY KEY NOT NULL,
	"gira_id" text NOT NULL,
	"assistance_id" text NOT NULL,
	"sons_id" text NOT NULL,
	"items" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "giras" ADD COLUMN "responsible_id" text NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "donations" ADD CONSTRAINT "donations_gira_id_giras_id_fk" FOREIGN KEY ("gira_id") REFERENCES "public"."giras"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "donations" ADD CONSTRAINT "donations_assistance_id_assistance_id_fk" FOREIGN KEY ("assistance_id") REFERENCES "public"."assistance"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "donations" ADD CONSTRAINT "donations_sons_id_sons_id_fk" FOREIGN KEY ("sons_id") REFERENCES "public"."sons"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "giras" ADD CONSTRAINT "giras_responsible_id_sons_id_fk" FOREIGN KEY ("responsible_id") REFERENCES "public"."sons"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
