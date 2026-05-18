import { DraftingCompass, Globe, Scale } from "lucide-react";
import {
	ContainerContent,
	ContainerHeader,
	ContainerItem,
	ContainerTagline,
	ContainerTitle,
} from "../common/Container";
import { Card, CardContent, CardHeader, CardIcon, CardTitle } from "../ui/card";
import { getTranslations } from "next-intl/server";

export default async function OurPillars() {
	const t = await getTranslations("AboutPage.pillars");
	return (
		<ContainerItem className="bg-primary text-primary-foreground">
			<ContainerHeader>
				<ContainerTagline>{t("tagLine")}</ContainerTagline>
				<ContainerTitle className="text-primary-foreground">{t("title")}</ContainerTitle>
			</ContainerHeader>
			<ContainerContent>
				<div className="grid lg:grid-cols-3 gap-2 bg-accent/20 p-3">
					<Card className="bg-primary text-accent-foreground">
						<CardHeader>
							<CardIcon>
								<Scale />
							</CardIcon>
							<CardTitle>{t("0.title")}</CardTitle>
						</CardHeader>
						<CardContent>
							<p>{t("0.description")}</p>
						</CardContent>
					</Card>
					<Card className="bg-primary text-accent-foreground">
						<CardHeader>
							<CardIcon>
								<DraftingCompass />
							</CardIcon>
							<CardTitle>{t("1.title")}</CardTitle>
						</CardHeader>
						<CardContent>
							<p>{t("1.description")}</p>
						</CardContent>
					</Card>
					<Card className="bg-primary text-accent-foreground">
						<CardHeader>
							<CardIcon>
								<Globe />
							</CardIcon>
							<CardTitle>{t("2.title")}</CardTitle>
						</CardHeader>
						<CardContent>
							<p>{t("2.description")}</p>
						</CardContent>
					</Card>
				</div>
			</ContainerContent>
		</ContainerItem>
	);
}
