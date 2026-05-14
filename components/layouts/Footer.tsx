import Link from "next/link";
import Logo from "../common/Logo";
import { Facebook } from "@/assets/icons/Facebook";
import { Gmail } from "@/assets/icons/Gmail";

export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="container mx-auto">
			<div className="grid grid-cols-3 gap-20 py-20 px-10">
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
				<address className="flex flex-col gap-5">
					<p className="text-sm font-bold text-accent">Location</p>
					<p className="text-accent/70">Gral Manuel Márquez de León 2340, Zona Central, 23000 La Paz, B.C.S.</p>
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
