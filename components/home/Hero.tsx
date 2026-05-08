import Image from "next/image";
import {
	ContainerContent,
	ContainerDescription,
	ContainerItem,
	ContainerTagline,
	ContainerTitle,
} from "../common/Container";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Hero() {
	return (
		<ContainerItem className="grid grid-cols-12 min-h-[calc(100svh-80px)] pt-5">
			<ContainerContent className="col-span-7 grid place-content-center space-y-6">
				<ContainerTagline>UNRIVALED LEGAL REPRESENTATION</ContainerTagline>
				<ContainerTitle className="text-6xl">Authority Built on Decades of Trust.</ContainerTitle>
				<ContainerDescription>
					Navigating high-stakes cross-border legalities with surgical precision. We provide architectural restraint to
					your legal challenges, ensuring stability in Mexico and the United States.
				</ContainerDescription>
				<div className="flex gap-5 pt-5">
					<Button size={"lg"} asChild>
						<Link href={"/"}>OUR SPECIALTIES</Link>
					</Button>
					<Button size={"lg"} variant={"outline"} asChild>
						<Link href={"/"}>THE FIRM</Link>
					</Button>
				</div>
			</ContainerContent>

			<ContainerContent className="col-span-5 flex justify-end items-center">
				<div className="relative">
					<Image src={"/images/law.jpg"} alt={"law"} width={480} height={700} loading="eager" className="aspect-auto" />
					<div className="absolute -bottom-7 -left-7 w-52 h-32 grid place-items-center bg-accent">
						<div>
							<div className="flex items-center text-primary-foreground">
								<p className="text-5xl font-semibold font-heading">10</p>
								<Plus />
							</div>
							<p className="text-xs text-primary-foreground/70">YEARS OF EXCELLENCE</p>
						</div>
					</div>
				</div>
			</ContainerContent>
		</ContainerItem>
	);
}
