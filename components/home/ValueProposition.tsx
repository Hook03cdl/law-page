import { BadgeCheck, Shield, Earth, ScrollText } from "lucide-react";
import {
	ContainerItem,
	ContainerContent,
	ContainerHeader,
	ContainerTagline,
	ContainerTitle,
	ContainerDescription,
} from "../common/Container";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";
import Image from "next/image";

export default function ValueProposition() {
	return (
		<ContainerItem className="grid grid-cols-12 gap-10">
			<ContainerContent className="col-span-5 space-y-15">
				<ContainerHeader>
					<ContainerTagline>DISTINCTIVE EXCELLENCE</ContainerTagline>
					<ContainerTitle>Architectural Restraint in Legal Strategy.</ContainerTitle>
					<ContainerDescription>
						We believe that the most effective legal solutions are built with meticulous care and structural integrity.
						Our firm operates at the intersection of Mexican and U.S. law, providing a seamless bridge for global
						interests.
					</ContainerDescription>
				</ContainerHeader>
				<div className="space-y-10">
					<div className="flex gap-2">
						<div className="grid place-items-center bg-muted size-9 shrink-0">
							<BadgeCheck />
						</div>
						<div>
							<p className="text-primary text-lg font-heading font-bold">Bilingual Proficiency</p>
							<p>Native fluency in both legal systems and languages ensures nothing is lost in translation.</p>
						</div>
					</div>
					<div className="flex gap-2">
						<div className="grid place-items-center bg-muted size-9 shrink-0">
							<Shield />
						</div>
						<div>
							<p className="text-primary text-lg font-heading font-bold">Bilingual Proficiency</p>
							<p>Native fluency in both legal systems and languages ensures nothing is lost in translation.</p>
						</div>
					</div>
				</div>
			</ContainerContent>
			<ContainerContent className="col-span-7 grid grid-cols-2 gap-5">
				<div className="relative h-full w-auto">
					<Image
						src={"/images/law.jpg"}
						alt={"law"}
						fill
						className="object-cover"
						sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,(max-width: 1600px) 40vw,33vw"
					/>
				</div>

				<div className=" grid grid-rows-2 gap-5">
					<Card className="size-full bg-primary text-primary-foreground">
						<CardHeader className="space-y-5">
							<Earth className="text-secondary size-10" />
							<CardTitle>Global Reach</CardTitle>
							<CardDescription>Connecting the financial hubs of Mexico City and New York.</CardDescription>
						</CardHeader>
					</Card>
					<Card className="size-full bg-secondary text-secondary-foreground">
						<CardHeader className="space-y-5">
							<ScrollText className="text-primary size-10" />
							<CardTitle>Document Integrity</CardTitle>
							<CardDescription>Rigid alignment and attention to detail in every contract.</CardDescription>
						</CardHeader>
					</Card>
				</div>
			</ContainerContent>
		</ContainerItem>
	);
}
