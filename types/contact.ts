import { contactSchema } from "@/schemas/contact";
import z from "zod";

export type ContactProps = z.infer<typeof contactSchema>;
