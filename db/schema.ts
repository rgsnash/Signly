import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const courses = pgTable("courses", {
    id: serial("id").primaryKey(), //it auto increment every new courses
    title: text("title").notNull(),
    imageSrc: text("imgae_src").notNull()
});