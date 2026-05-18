import Link from "next/link";
import {
	ContainerContent,
	ContainerDescription,
	ContainerHeader,
	ContainerItem,
	ContainerTitle,
} from "../common/Container";
import { Button } from "../ui/button";
import { getTranslations } from "next-intl/server";

export default async function ConsultationBanner() {
	const t = await getTranslations("HomePage.banner");
	return (
		<ContainerItem className="bg-primary">
			<ContainerHeader>
				<ContainerTitle className="text-center text-primary-foreground font-semibold">{t("title")}</ContainerTitle>
				<div className="flex justify-center">
					<ContainerDescription className="text-center text-base text-primary-foreground/60 md:max-w-4/7">
						{t("description")}
					</ContainerDescription>
				</div>
			</ContainerHeader>
			<ContainerContent className="flex justify-center">
				<Button variant={"inverted"} size={"xl"} asChild>
					<Link href={"/contact"}>{t("button")}</Link>
				</Button>
			</ContainerContent>
		</ContainerItem>
	);
}
