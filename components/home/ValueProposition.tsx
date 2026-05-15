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
import { getTranslations } from "next-intl/server";

export default async function ValueProposition() {
	const t = await getTranslations("HomePage.proposition");
	return (
		<ContainerItem className="grid grid-cols-12 gap-10">
			<ContainerContent className="col-span-5 space-y-15">
				<ContainerHeader>
					<ContainerTagline>{t("tagline")}</ContainerTagline>
					<ContainerTitle>{t("title")}</ContainerTitle>
					<ContainerDescription>{t("description")}</ContainerDescription>
				</ContainerHeader>
				<div className="space-y-10">
					<div className="flex gap-2">
						<div className="grid place-items-center bg-muted size-9 shrink-0">
							<BadgeCheck />
						</div>
						<div>
							<p className="text-primary text-lg font-heading font-bold">{t("0.title")}</p>
							<p>{t("0.description")}</p>
						</div>
					</div>
					<div className="flex gap-2">
						<div className="grid place-items-center bg-muted size-9 shrink-0">
							<Shield />
						</div>
						<div>
							<p className="text-primary text-lg font-heading font-bold">{t("1.title")}</p>
							<p>{t("1.description")}</p>
						</div>
					</div>
				</div>
			</ContainerContent>
			<ContainerContent className="col-span-7 grid grid-cols-2 gap-5">
				<Image
					src={"/images/office.jpg"}
					alt={"office"}
					height={800}
					width={600}
					className="object-cover h-full"
					sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,(max-width: 1600px) 40vw,33vw"
				/>

				<div className="grid grid-rows-2 gap-5">
					<Card className="flex justify-center size-full bg-primary text-primary-foreground">
						<CardHeader className="space-y-5">
							<Earth className="text-secondary size-10" />
							<CardTitle>{t("card.0.title")}</CardTitle>
							<CardDescription>{t("card.0.description")}</CardDescription>
						</CardHeader>
					</Card>
					<Card className="flex justify-center size-full bg-secondary text-secondary-foreground">
						<CardHeader className="space-y-5">
							<ScrollText className="text-primary size-10" />
							<CardTitle>{t("card.1.title")}</CardTitle>
							<CardDescription>{t("card.1.description")}</CardDescription>
						</CardHeader>
					</Card>
				</div>
			</ContainerContent>
		</ContainerItem>
	);
}
