import Link from "next/link";
import Logo from "../common/Logo";
import { Button } from "../ui/button";

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
	return (
		<header className="sticky inset-0 bg-background border-b z-40">
			<nav className="h-20 flex items-center justify-between px-10 container mx-auto">
				<Link href={"/"}>
					<Logo />
				</Link>
				<ul className="flex gap-3">
					{links.map(({ href, label }) => (
						<li key={href}>
							<Link href={href}>{label}</Link>
						</li>
					))}
				</ul>
				<ul className="flex items-center gap-5">
					<li>
						<Link href="/">EN/ES</Link>
					</li>
					<li>
						<Button className="bg-accent" asChild size={"sm"}>
							<Link href="/">SCHEDULE CONSULTATION</Link>
						</Button>
					</li>
				</ul>
			</nav>
		</header>
	);
}
