ALTER TABLE "frequency" RENAME TO "frequencies";--> statement-breakpoint
ALTER TABLE "gira" RENAME TO "giras";--> statement-breakpoint
ALTER TABLE "frequencies" DROP CONSTRAINT "frequency_gira_id_gira_id_fk";
--> statement-breakpoint
ALTER TABLE "frequencies" DROP CONSTRAINT "frequency_assistance_id_assistance_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "frequencies" ADD CONSTRAINT "frequencies_gira_id_giras_id_fk" FOREIGN KEY ("gira_id") REFERENCES "public"."giras"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "frequencies" ADD CONSTRAINT "frequencies_assistance_id_assistance_id_fk" FOREIGN KEY ("assistance_id") REFERENCES "public"."assistance"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
