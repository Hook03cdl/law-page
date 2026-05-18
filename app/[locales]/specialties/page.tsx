import {
	Container,
	ContainerContent,
	ContainerDescription,
	ContainerHeader,
	ContainerItem,
	ContainerTagline,
	ContainerTitle,
} from "@/components/common/Container";
import ListSpecialities from "@/components/common/ListSpecialities";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Specialties",
};
export default async function SpecialtiesPage() {
	const t = await getTranslations("SpecialtiesPage");
	return (
		<Container>
			<ContainerItem>
				<ContainerHeader className="max-w-3xl">
					<ContainerTagline>{t("tagLine")}</ContainerTagline>
					<ContainerTitle size="xl">{t("title")}</ContainerTitle>
					<ContainerDescription>{t("description")}</ContainerDescription>
				</ContainerHeader>
				<ContainerContent className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
					<ListSpecialities className="md:first:col-span-2 h-[40svh]" iconDecorator />
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
							{t("subtitle")}
						</ContainerTitle>
						<ContainerDescription className="text-accent-foreground text-center">
							{t("subdescription")}
						</ContainerDescription>
					</ContainerHeader>
					<ContainerContent>
						<Button size={"lg"} variant={"inverted"} asChild>
							<Link href="/contact">{t("btn")}</Link>
						</Button>
					</ContainerContent>
				</div>
			</ContainerItem>
		</Container>
	);
}
