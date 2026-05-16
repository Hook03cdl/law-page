"use client";
import Logo from "../common/Logo";
import { useParams, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

interface LinkProps {
	label: string;
	href: string;
}

const switchLocalePath = (newLocale: string, pathname: string) => {
	const segments = pathname.split("/");
	if (segments.length < 2) return `/${newLocale}`;
	segments[1] = newLocale;

	return segments.join("/");
};

export default function Header() {
	const params = useParams<{ locales: "es" | "en" }>();
	const pathname = usePathname();

	const t = useTranslations("Header");
	const links: LinkProps[] = [
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
		<header className={"sticky inset-0 bg-background border-b border-border z-40"}>
			<HeaderMobile links={links} locale={params.locales} pathname={pathname} />
			<HeaderDesktop links={links} locale={params.locales} pathname={pathname} />
		</header>
	);
}

interface HeaderProps {
	links: LinkProps[];
	locale: "es" | "en";
	pathname: string;
}

function HeaderMobile({ links, locale, pathname }: HeaderProps) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className={"h-15 md:hidden flex items-center justify-between px-3 md:px-10 container mx-auto font-heading"}>
			<Link href={`/${locale}`}>
				<Logo />
			</Link>
			<Sheet open={isOpen} onOpenChange={setIsOpen}>
				<SheetTrigger>
					<Menu />
				</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetTitle></SheetTitle>
					</SheetHeader>
					<div>
						<nav className="px-5 mt-20">
							<ul className="space-y-3">
								{links.map(({ href, label }) => (
									<li key={href}>
										<Link
											href={`/${locale}${href}`}
											onClick={() => setIsOpen(false)}
											className={cn(
												"relative font-bold text-xl",
												pathname.includes(href)
													? "before:absolute before:-left-3 before:top-0 before:h-full before:w-0.5 before:bg-secondary ml-3"
													: "text-primary/60 hover:text-primary"
											)}
										>
											{label}
										</Link>
									</li>
								))}
							</ul>
						</nav>
					</div>
					<SheetFooter>
						<Link href={switchLocalePath(locale === "en" ? "es" : "en", pathname)} className="text-lg">
							<span className={locale === "en" ? "font-bold" : ""}>En </span>/
							<span className={locale === "es" ? "font-bold" : ""}>Es </span>
						</Link>
					</SheetFooter>
				</SheetContent>
			</Sheet>
		</div>
	);
}
function HeaderDesktop({ links, pathname, locale }: HeaderProps) {
	return (
		<div className="h-20 hidden md:flex items-center justify-between px-3 md:px-10 container mx-auto font-heading">
			<Link href={`/${locale}`}>
				<Logo />
			</Link>
			<nav className="flex items-center">
				<ul className="hidden md:flex gap-3">
					{links.map(({ href, label }) => (
						<li key={href}>
							<Link
								href={`/${locale}${href}`}
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
			</nav>
			<ul className="flex items-center gap-5">
				<li>
					<Link href={switchLocalePath(locale === "en" ? "es" : "en", pathname)}>
						<span className={locale === "en" ? "font-bold" : ""}>EN </span>/
						<span className={locale === "es" ? "font-bold" : ""}>ES </span>
					</Link>
				</li>
				{/* <li>
						<Button className="bg-accent font-body" asChild size={"sm"}>
							<Link href="/contact">SCHEDULE CONSULTATION</Link>
						</Button>
					</li> */}
			</ul>
		</div>
	);
}
