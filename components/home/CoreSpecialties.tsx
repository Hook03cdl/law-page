import Link from "next/link";
import {
	ContainerContent,
	ContainerHeader,
	ContainerTagline,
	ContainerTitle,
	ContainerAction,
	ContainerItem,
} from "../common/Container";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ArrowRight, Building2, Scale } from "lucide-react";
import { Hammer } from "@/assets/icons/Hammer";

const specialitis: { icon: React.ElementType; title: string; content: string; href: string }[] = [
	{
		href: "/",
		title: "Family law",
		content: "Strategic guidance for complex mergers, acquisitions, and cross-border structuring.",
		icon: Scale,
	},
	{
		href: "/",
		title: "Litigation",
		content: "Securing high-value assets and navigating international property regulations.",
		icon: Building2,
	},
	{
		href: "/",
		title: "Commercial law",
		content: "High-stakes advocacy with a focus on arbitration and resolution excellence.",
		icon: Hammer,
	},
];

export default function CoreSpecialties() {
	return (
		<ContainerItem className="bg-surface">
			<ContainerHeader>
				<ContainerTagline>PRECISION JURISPRUDENCE</ContainerTagline>
				<ContainerTitle>Core Specialties</ContainerTitle>
				<ContainerAction>
					<Button variant={"link"} asChild>
						<Link href={"/"}>VIEW ALL AREAS</Link>
					</Button>
				</ContainerAction>
			</ContainerHeader>
			<ContainerContent className="grid grid-cols-3 gap-10">
				{specialitis.map(({ content, href, icon: Icon, title }) => (
					<Link href={href} key={title}>
						<Card className="space-y-5">
							<CardHeader className="space-y-5">
								<Icon className="text-secondary size-8" />
								<CardTitle>{title}</CardTitle>
							</CardHeader>
							<CardContent className="space-y-5">
								<p>{content}</p>
								<div className="flex justify-end">
									<ArrowRight className="text-secondary" />
								</div>
							</CardContent>
						</Card>
					</Link>
				))}
			</ContainerContent>
		</ContainerItem>
	);
}
