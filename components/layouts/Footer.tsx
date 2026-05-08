import Link from "next/link";
import Logo from "../common/Logo";
import { Facebook } from "@/assets/icons/Facebook";
import { Gmail } from "@/assets/icons/Gmail";

export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="container mx-auto">
			<div className="grid grid-cols-4 gap-10 py-20 px-10">
				<div className="grid gap-5">
					<Logo />
					<p className="text-sm text-accent/70">
						Architectural restraint in law. Providing high-stakes representation with meticulous attention to detail.
					</p>
					<div className="flex items-center gap-5">
						<Facebook />
						<Gmail />
					</div>
				</div>
				<address className="flex flex-col gap-5">
					<p className="text-sm font-bold text-accent">GLOBAL REACH</p>
					<Link className="text-accent/70" href="tel:000000000">
						MX: +52 (000) 000 0000
					</Link>
					<Link className="text-accent/70" href="tel:000000000">
						USA: +1 (000) 000 0000
					</Link>
					<Link className="text-accent/70" href="mail:contact@legalauthority.com">
						contact@legalauthority.com
					</Link>
				</address>
				<nav className="flex flex-col gap-5">
					<p className="text-sm font-bold text-accent">LEGAL LINKS</p>
					<ul className="flex flex-col gap-5 text-accent/70">
						<li>
							<Link href={"/"}>Privacy Policy</Link>
						</li>
						<li>
							<Link href={"/"}>Terms of Service</Link>
						</li>
						<li>
							<Link href={"/"}>Compliance</Link>
						</li>
					</ul>
				</nav>
				<address className="flex flex-col gap-5">
					<p className="text-sm font-bold text-accent">HEADQUARTERS</p>
					<p className="text-accent/70">Corporate HQ, Reforma 222, MX 06600, Mexico City</p>
				</address>
			</div>
			<div className="p-10">
				<p className="text-accent/70 text-sm font-heading">
					© {year} ARCHITECTURAL RESTRAINT LAW. ALL RIGHTS RESERVED.
				</p>
			</div>
		</footer>
	);
}
