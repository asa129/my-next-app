import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { randomUUID } from "crypto";

export const files = sqliteTable("files", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => randomUUID()),
  filename: text("filename").notNull(),
  filePath: text("filePath").notNull(),
  content: text("content").notNull(),
  expiresAt: text("expiresAt").notNull(),
  createdAt: text("createdAt")
    .notNull()
    .$defaultFn(() => new Date().toISOString()),
});
