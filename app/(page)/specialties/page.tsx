import {
	Container,
	ContainerContent,
	ContainerDescription,
	ContainerHeader,
	ContainerItem,
	ContainerTagline,
	ContainerTitle,
} from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardIcon, CardTitle } from "@/components/ui/card";
import { specialities } from "@/data/specialties";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Specialties",
};
export default function SpecialtiesPage() {
	return (
		<Container>
			<ContainerItem>
				<ContainerHeader className="max-w-3xl">
					<ContainerTagline>LEGAL EXPERTISE</ContainerTagline>
					<ContainerTitle size="xl">Our Specialties</ContainerTitle>
					<ContainerDescription>
						Navigating the complexities of cross-border law requires more than just legal knowledge; it demands
						architectural precision and a global perspective. We provide high-tier representation in the following
						practice areas.
					</ContainerDescription>
				</ContainerHeader>
				<ContainerContent className="grid grid-cols-3 gap-5">
					{specialities.map(({ description, icon: Icon, name }) => (
						<Card key={name} className="first:relative group/card first:col-span-2 h-[40svh]">
							<div className="flex flex-col justify-center">
								<CardHeader>
									<CardIcon>
										<Icon />
									</CardIcon>
									<CardTitle>{name}</CardTitle>
								</CardHeader>
								<CardContent className="mt-5">
									<p>{description}</p>
								</CardContent>
							</div>
							<Icon className="group-first/card:block hidden absolute right-10 top-10 text-border opacity-50 size-20" />
						</Card>
					))}
				</ContainerContent>
			</ContainerItem>
			<ContainerItem className="relative min-h-128 bg-accent z-10">
				<Image
					fill
					src={"/images/executive_office.jpg"}
					alt={"office"}
					loading="eager"
					className="object-cover aspect-video object-[20%_50%] -z-10 opacity-10"
				/>
				<div className="flex flex-col justify-center items-center h-full gap-10">
					<ContainerHeader className="w-full max-w-3xl">
						<ContainerTitle size="xl" className="text-accent-foreground text-center">
							Discuss Your Case
						</ContainerTitle>
						<ContainerDescription className="text-accent-foreground text-center">
							Professional consultation is the first step toward architectural legal stability. Connect with our
							cross-border experts today.
						</ContainerDescription>
					</ContainerHeader>
					<ContainerContent>
						<Button size={"lg"} variant={"inverted"} asChild>
							<Link href="/contact">SCHEDULE CONSULTATION</Link>
						</Button>
					</ContainerContent>
				</div>
			</ContainerItem>
		</Container>
	);
}
