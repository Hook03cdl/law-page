import Image from "next/image";
import { ContainerItem, ContainerContent, ContainerTitle, ContainerHeader } from "../common/Container";
import { getTranslations } from "next-intl/server";

export default async function OurLegacy() {
	const t = await getTranslations("AboutPage.legacy");
	return (
		<ContainerItem className="grid grid-cols-3 gap-10 max-2xl:min-h-[calc(100svh-80px)]">
			<ContainerContent>
				<ContainerTitle className="relative after:absolute after:top-full after:left-0 after:h-1 after:w-1/6 after:bg-secondary">
					{t("title")}
				</ContainerTitle>
			</ContainerContent>
			<div className="col-span-2 grid grid-cols-subgrid">
				<div className="relative w-full h-full aspect-4/5">
					<Image
						src={"/images/tower.jpg"}
						alt={"Tower"}
						fill
						loading="eager"
						className="object-cover"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</div>
				<ContainerContent className="space-y-10">
					<ContainerHeader>
						<ContainerTitle>{t("subtitle")}</ContainerTitle>
					</ContainerHeader>
					<div className="space-y-5">
						<p>{t("description")}</p>
						<p>{t("subdescription")}</p>
					</div>
				</ContainerContent>
			</div>
		</ContainerItem>
	);
}
