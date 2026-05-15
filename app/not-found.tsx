"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Home, Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
	const router = useRouter();

	return (
		<div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center bg-white font-sans">
			{/* Badge */}
			<span className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-full px-3 py-1 mb-8 tracking-wide">
				<span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
				Routes not found
			</span>

			{/* 404 number */}
			<div className="flex flex-col items-center">
				<span className="text-9xl font-medium text-gray-900 tracking-tighter leading-none">404</span>
				<span className="block h-0.5 w-16 bg-blue-500 rounded-full mt-3" />
			</div>

			{/* Heading */}
			<h1 className="text-2xl font-medium text-gray-900 mt-5 mb-2">We couldn&apos;t find that page</h1>

			{/* Description */}
			<p className="text-sm text-gray-500 max-w-sm leading-relaxed mb-9">
				The page you&apos;re looking for may have been moved, renamed, or removed. Double-check the URL or head back to
				where you came from.
			</p>

			{/* CTAs */}
			<div className="flex flex-wrap items-center justify-center gap-2.5">
				<Button asChild>
					<Link href="/">
						<Home />
						Go to Home
					</Link>
				</Button>
				<Button variant={"outline"} asChild>
					<Link href="/contact">
						<Mail />
						Contact support
					</Link>
				</Button>
			</div>

			{/* Footer links */}
			<div className="flex items-center gap-2 mt-10 text-gray-400 flex-wrap justify-center ">
				<button className="text-blue-600 hover:underline" onClick={() => router.back()}>
					Back
				</button>
				<Separator orientation="vertical" className="bg-gray-300" />
				<Link href="/sitemap" className="text-blue-600 hover:underline">
					Sitemap
				</Link>
			</div>
		</div>
	);
}
