import { contactSchema } from "@/schemas/contact";
import { ContactProps } from "@/types/contact";

export async function validateContact(data: ContactProps) {
	const res = await contactSchema.safeParseAsync(data);

	return res.success;
}
