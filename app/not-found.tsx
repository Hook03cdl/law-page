
import ButtonBack from "@/components/notfound/ButtonBack";
import { Button } from "@/components/ui/button";
import { Home, Undo2 } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function NotFound() {
	const t = await getTranslations("NotFoundPage");
	// const router = useRouter();
	return (
		<div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center bg-white font-sans">
			{/* Badge */}
			<span className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-full px-3 py-1 mb-8 tracking-wide">
				<span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
				{t("label")}
			</span>

			{/* 404 number */}
			<div className="flex flex-col items-center">
				<span className="text-9xl font-medium text-gray-900 tracking-tighter leading-none">404</span>
				<span className="block h-0.5 w-16 bg-blue-500 rounded-full mt-3" />
			</div>

			{/* Heading */}
			<h1 className="text-2xl font-medium text-gray-900 mt-5 mb-2">{t("title")}</h1>

			{/* Description */}
			<p className="text-sm text-gray-500 max-w-sm leading-relaxed mb-9">{t("description")}</p>

			{/* CTAs */}
			<div className="flex flex-wrap items-center justify-center gap-2.5">
				<Button asChild>
					<Link href="/">
						<Home />
						{t("btnPrimary")}
					</Link>
				</Button>
				<ButtonBack>
					<Undo2 />
					<span>{t("btnBack")}</span>
				</ButtonBack>
			</div>
		</div>
	);
}
