"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

export default function ButtonBack({ children }: { children: React.ReactNode }) {
	const router = useRouter();
	return (
		<Button variant={"outline"} className="text-blue-600 hover:underline" onClick={() => router.back()}>
			{children}
		</Button>
	);
}
