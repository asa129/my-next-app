import { getCloudflareContext } from "@opennextjs/cloudflare";
import { Hono } from "hono";
import { drizzle } from "drizzle-orm/d1";
import { handle } from "hono/vercel";
import { files } from "@/db/schema";

const app = new Hono().basePath("/api");

app.get("/files", async (c) => {
  const db = drizzle(
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    (getCloudflareContext().env as any).DB as unknown as D1Database
  );
  const filesResponse = await db.select().from(files);
  return c.json(filesResponse);
});

export const GET = handle(app);
