"use client";
import Logo from "../common/Logo";
import { useParams, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Header() {
	const params = useParams<{ locales: "es" | "en" }>();
	const pathname = usePathname();

	const switchLocalePath = (newLocale: string) => {
		const segments = pathname.split("/");

		// si la ruta es "/", devuelve "/newLocale"
		if (segments.length < 2) return `/${newLocale}`;

		// reemplaza el primer segmento (locale actual)
		segments[1] = newLocale;

		return segments.join("/");
	};

	const t = useTranslations("Header");

	const links: { label: string; href: string }[] = [
		{
			label: t("specialties"),
			href: "/specialties",
		},
		{
			label: t("about"),
			href: "/about",
		},
		{
			label: t("contact"),
			href: "/contact",
		},
	];
	return (
		<header className="sticky inset-0 bg-background border-b border-border z-40">
			<nav className="h-20 flex items-center justify-between px-10 container mx-auto font-heading">
				<Link href={"/"}>
					<Logo />
				</Link>
				<ul className="flex gap-3">
					{links.map(({ href, label }) => (
						<li key={href}>
							<Link
								href={href}
								className={
									pathname.includes(href)
										? "font-bold underline underline-offset-8 decoration-2 decoration-secondary"
										: "text-primary/60 hover:text-primary"
								}
							>
								{label}
							</Link>
						</li>
					))}
				</ul>
				<ul className="flex items-center gap-5">
					<li>
						<Link href={switchLocalePath(params.locales === "en" ? "es" : "en")}>
							<span className={params.locales === "en" ? "font-bold" : ""}>EN </span>/
							<span className={params.locales === "es" ? "font-bold" : ""}>ES </span>
						</Link>
					</li>
					{/* <li>
						<Button className="bg-accent font-body" asChild size={"sm"}>
							<Link href="/contact">SCHEDULE CONSULTATION</Link>
						</Button>
					</li> */}
				</ul>
			</nav>
		</header>
	);
}
