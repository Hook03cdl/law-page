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
import { Card, CardContent, CardHeader, CardIcon, CardTitle } from "../ui/card";
import { specialities } from "@/data/specialties";
import { ArrowRight } from "lucide-react";

export default function CoreSpecialties() {
	const core = specialities.slice(0, 3);
	return (
		<ContainerItem className="bg-surface">
			<ContainerHeader>
				<ContainerTagline>PRECISION JURISPRUDENCE</ContainerTagline>
				<ContainerTitle>Core Specialties</ContainerTitle>
				<ContainerAction>
					<Button variant={"link"} asChild>
						<Link href={"/specialties"}>VIEW ALL AREAS</Link>
					</Button>
				</ContainerAction>
			</ContainerHeader>
			<ContainerContent className="grid grid-cols-3 gap-10">
				{core.map(({ description, href, icon: Icon, name }) => (
					<Link href={href} key={name}>
						<Card className="space-y-5">
							<CardHeader className="space-y-5">
								<CardIcon size="lg">
									<Icon />
								</CardIcon>
								<CardTitle>{name}</CardTitle>
							</CardHeader>
							<CardContent className="space-y-5">
								<p>{description}</p>
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
