import Image from "next/image";
import {
	ContainerContent,
	ContainerDescription,
	ContainerHeader,
	ContainerItem,
	ContainerTagline,
	ContainerTitle,
} from "../common/Container";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function Hero() {
	const t = await getTranslations("HomePage.hero");
	return (
		<ContainerItem className="lg:grid lg:grid-cols-12 pt-5! max-2xl:min-h-[calc(100svh-80px)]">
			<ContainerContent className="lg:col-span-7 flex flex-col justify-center">
				<ContainerHeader>
					<ContainerTagline>{t("tagLine")}</ContainerTagline>
					<ContainerTitle size="xl">{t("title")}</ContainerTitle>
					<ContainerDescription className="max-w-xl">{t("description")}</ContainerDescription>
				</ContainerHeader>
				<div className="grid md:flex *:max-lg:flex-1 gap-5 pt-10">
					<Button size={"lg"} asChild>
						<Link href={"/specialties"}>{t("btnPrimary")}</Link>
					</Button>
					<Button size={"lg"} variant={"outline"} asChild>
						<Link href={"/contact"}>{t("btnSecondary")}</Link>
					</Button>
				</div>
			</ContainerContent>

			<ContainerContent className="lg:col-span-5 lg:flex lg:justify-end lg:items-center">
				<div className="lg:relative">
					<Image
						src={"/images/law.jpg"}
						alt={"law"}
						width={480}
						loading="eager"
						height={600}
						className="object-contain max-lg:hidden"
					/>
					<div className="lg:absolute lg:-bottom-7 lg:-left-7 w-full lg:w-52 h-32 grid place-items-center bg-accent">
						<div>
							<div className="flex items-center text-primary-foreground">
								<p className="text-5xl font-semibold font-heading">10</p>
								<Plus />
							</div>
							<p className="text-xs text-primary-foreground/70">{t("excelence")}</p>
						</div>
					</div>
				</div>
			</ContainerContent>
		</ContainerItem>
	);
}
