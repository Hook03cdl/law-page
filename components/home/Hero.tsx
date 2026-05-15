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
	const t = await getTranslations("HomePage");
	return (
		<ContainerItem className="grid grid-cols-12 max-2xl:min-h-[calc(100svh-80px)] pt-5">
			<ContainerContent className="col-span-7 flex flex-col justify-center">
				<ContainerHeader>
					<ContainerTagline>{t("hero.tagLine")}</ContainerTagline>
					<ContainerTitle size="xl">{t("hero.title")}</ContainerTitle>
					<ContainerDescription className="max-w-xl">{t("hero.description")}</ContainerDescription>
				</ContainerHeader>
				<div className="flex gap-5 pt-10">
					<Button size={"lg"} asChild>
						<Link href={"/specialties"}>{t("hero.btnPrimary")}</Link>
					</Button>
					<Button size={"lg"} variant={"outline"} asChild>
						<Link href={"/contact"}>{t("hero.btnSecondary")}</Link>
					</Button>
				</div>
			</ContainerContent>

			<ContainerContent className="col-span-5 flex justify-end items-center">
				<div className="relative">
					<Image
						src={"/images/law.jpg"}
						alt={"law"}
						width={480}
						loading="eager"
						height={600}
						className="object-contain"
					/>
					<div className="absolute -bottom-7 -left-7 w-52 h-32 grid place-items-center bg-accent">
						<div>
							<div className="flex items-center text-primary-foreground">
								<p className="text-5xl font-semibold font-heading">10</p>
								<Plus />
							</div>
							<p className="text-xs text-primary-foreground/70">YEARS OF EXCELLENCE</p>
						</div>
					</div>
				</div>
			</ContainerContent>
		</ContainerItem>
	);
}
