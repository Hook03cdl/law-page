"use client";

import { WhatsApp } from "@/assets/icons/Whatsapp";
import { Button } from "../ui/button";
import Link from "next/link";

export default function FloatButtonWhatsapp() {
	return (
		<Button
			className="fixed bottom-5 right-5 size-15 grid place-items-center rounded-full bg-[#25D366] hover:bg-[#25D366]/80 z-40"
			asChild
		>
			<Link href={"https://wa.me/"} target="_blank">
				<WhatsApp className="size-8" />
			</Link>
		</Button>
	);
}
