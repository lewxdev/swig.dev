CREATE TABLE "auth_session" (
	"key" text PRIMARY KEY NOT NULL,
	"value" json NOT NULL
);
--> statement-breakpoint
CREATE TABLE "auth_state" (
	"key" text PRIMARY KEY NOT NULL,
	"value" json NOT NULL
);
