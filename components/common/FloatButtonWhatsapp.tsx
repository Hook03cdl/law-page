"use client";

import { WhatsApp } from "@/assets/icons/Whatsapp";
import { Button } from "../ui/button";

export default function FloatButtonWhatsapp() {
	return (
		<Button className="fixed bottom-5 right-5 size-15 grid place-items-center rounded-full bg-[#25D366] z-40">
			<WhatsApp className="size-8" />
		</Button>
	);
}
