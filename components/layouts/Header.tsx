"use client";
import Link from "next/link";
import Logo from "../common/Logo";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

const links: { label: string; href: string }[] = [
	{
		label: "Specialties",
		href: "/specialties",
	},
	{
		label: "About Us",
		href: "/about",
	},
	{
		label: "Contact",
		href: "/contact",
	},
];

export default function Header() {
	const pathname = usePathname();
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
									pathname === href
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
						<Link href="/">EN/ES</Link>
					</li>
					<li>
						<Button className="bg-accent font-body" asChild size={"sm"}>
							<Link href="/">SCHEDULE CONSULTATION</Link>
						</Button>
					</li>
				</ul>
			</nav>
		</header>
	);
}
