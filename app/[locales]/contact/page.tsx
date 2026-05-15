import {
	Container,
	ContainerContent,
	ContainerHeader,
	ContainerItem,
	ContainerTitle,
} from "@/components/common/Container";
import FormContact from "@/components/contact/FormContact";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

export default async function ContactPage() {
	const t = await getTranslations("ContactPage");
	return (
		<Container>
			<ContainerItem className="grid grid-cols-12 gap-20">
				<ContainerContent className="col-span-5 space-y-10">
					<ContainerHeader>
						<ContainerTitle size="xl">{t("title")}</ContainerTitle>
					</ContainerHeader>
					<p>{t("description")}</p>
					<div className="border-l-2 border-l-border pl-5 space-y-10">
						<div>
							<p className="text-secondary text-xs font-bold uppercase">Mexico</p>
							<p className="text-3xl font-heading font-semibold">+52 (000) 000 0000</p>
						</div>
						<div>
							<p className="text-secondary text-xs font-bold uppercase">{t("us")}</p>
							<p className="text-3xl font-heading font-semibold">+1 (000) 000 0000</p>
						</div>
						<div>
							<p className="text-secondary text-xs font-bold uppercase">{t("email")}</p>
							<p className="text-lg font-body font-semibold">example@email.com</p>
						</div>
					</div>
				</ContainerContent>
				<ContainerContent className="col-span-7">
					<FormContact />
				</ContainerContent>
			</ContainerItem>
			<div className="relative">
				<Image
					src={"/images/location_map.png"}
					alt={"Map"}
					height={1994}
					width={3543}
					loading="eager"
					className="aspect-video object-cover object-bottom max-h-[calc(100vh-80px)]"
				/>
				<Card className=" absolute top-1/2 left-1/2 -translate-1/2 max-w-md">
					<CardHeader>
						<CardTitle>Name</CardTitle>
					</CardHeader>
					<CardContent>
						<p>Gral Manuel Márquez de León 2340, Zona Central, 23000 La Paz, B.C.S.</p>
					</CardContent>
					<CardFooter>
						<Button variant={"link"} size={"xl"} className="text-secondary px-0" asChild>
							<Link href={"/"}>
								<span>{t("btnMap")}</span>
								<ExternalLink />
							</Link>
						</Button>
					</CardFooter>
				</Card>
			</div>
		</Container>
	);
}
