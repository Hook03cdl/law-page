import { contactSchema } from "@/schemas/contact";
import { ContactProps } from "@/types/contact";

export async function parseContact(data: ContactProps) {
	const parse = await contactSchema.parseAsync(data);
	return parse;
}
