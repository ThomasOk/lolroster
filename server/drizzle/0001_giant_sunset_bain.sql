CREATE TABLE "matchups" (
	"id" serial PRIMARY KEY NOT NULL,
	"team1" json NOT NULL,
	"team2" json NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"blue_votes" integer DEFAULT 0,
	"red_votes" integer DEFAULT 0
);
