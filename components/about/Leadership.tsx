import Image from "next/image";
import {
	ContainerContent,
	ContainerDescription,
	ContainerHeader,
	ContainerItem,
	ContainerTagline,
	ContainerTitle,
} from "../common/Container";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { getTranslations } from "next-intl/server";

export default async function Leadership() {
	const t = await getTranslations("AboutPage.leadership");
	return (
		<ContainerItem>
			<ContainerHeader>
				<ContainerTagline>{t("tagline")}</ContainerTagline>
				<ContainerTitle>{t("title")}</ContainerTitle>
				<ContainerDescription>{t("description")}</ContainerDescription>
			</ContainerHeader>
			<ContainerContent className="grid md:grid-cols-3 xl:grid-cols-5 gap-5">
				{Array.from({ length: 5 }, (_, i) => (
					<Card key={i} className="ring-0">
						<div className="relative w-full min-h-100 aspect-7/5">
							<Image
								src={"https://placehold.co/300x400.png"}
								alt={"name"}
								fill
								className="object-cover"
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
						</div>
						<CardHeader className="p-0">
							<CardTitle size="sm">Name</CardTitle>
							<CardDescription className="text-secondary font-semibold">Position</CardDescription>
						</CardHeader>
					</Card>
				))}
			</ContainerContent>
		</ContainerItem>
	);
}
