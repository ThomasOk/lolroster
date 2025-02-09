CREATE TABLE "players" (
	"id" serial PRIMARY KEY NOT NULL,
	"pseudo" varchar(255) NOT NULL,
	"first_name" varchar(255),
	"last_name" varchar(255),
	"birth_date" date,
	"country" varchar(2),
	"role" varchar(10) NOT NULL,
	"image_path" varchar(255),
	"leaguepedia_url" varchar(255),
	"team" varchar(255),
	"region" varchar(2) NOT NULL,
	"status" varchar(20) NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	"is_active" boolean DEFAULT true,
	CONSTRAINT "players_pseudo_unique" UNIQUE("pseudo")
);
