import z from "zod";

export const contactSchema = z.object({
	fullname: z.string(),
	phone_number: z
		.string()
		.transform((v) => v.replace(/[^\d+]/g, ""))
		.refine((v) => /^\+[1-9]\d{6,14}$/.test(v), {
			message: "El número debe estar en formato E.164 (ej. +522333232332)",
		}),
	email: z.email("Invalid email"),
	subject: z.string(),
	message: z.string(),
});
