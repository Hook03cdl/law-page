import Leadership from "@/components/about/Leadership";
import OurLegacy from "@/components/about/OurLegacy";
import OurPillar from "@/components/about/OurPillars";
import PhoneInformation from "@/components/about/PhoneInformation";
import {
	Container,
	ContainerDescription,
	ContainerHeader,
	ContainerItem,
	ContainerTitle,
} from "@/components/common/Container";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
	title: "About us",
};

export default async function AboutPage() {
	const t = await getTranslations("AboutPage");
	return (
		<Container>
			<ContainerItem>
				<ContainerHeader className="grid grid-cols-2 gap-10">
					<div className="space-y-10">
						<ContainerTitle size="xl">{t("title")}</ContainerTitle>
						<ContainerDescription className="max-w-xl">{t("description")}</ContainerDescription>
					</div>
					<div>
						<div className="border border-border bg-surface p-10 mt-10 space-y-3">
							<p className="text-secondary">{t("established")}</p>
							<p className={`italic text-primary/80 before:content-['"'] after:content-['"']`}>{t("landscape")}</p>
						</div>
					</div>
				</ContainerHeader>
			</ContainerItem>
			<OurLegacy />
			<OurPillar />
			<Leadership />
			<PhoneInformation />
		</Container>
	);
}
