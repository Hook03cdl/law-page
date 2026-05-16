import {
	Container,
	ContainerContent,
	ContainerHeader,
	ContainerItem,
	ContainerTitle,
} from "@/components/common/Container";
import ButtonMap from "@/components/contact/ButtonMap";
import FormContact from "@/components/contact/FormContact";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function ContactPage() {
	const t = await getTranslations("ContactPage");
	return (
		<Container>
			<ContainerItem className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-20">
				<ContainerContent className="lg:col-span-5 space-y-10">
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
				<ContainerContent className="lg:col-span-7">
					<FormContact />
				</ContainerContent>
			</ContainerItem>
			<div className="md:relative">
				<Image
					src={"/images/location_map.png"}
					alt={"Map"}
					height={1994}
					width={3543}
					loading="eager"
					className="aspect-video object-cover object-bottom lg:max-h-[calc(100vh-80px)]"
				/>
				<Card className="md:absolute md:top-1/2 md:left-1/2 md:-translate-1/2 md:max-w-md">
					<CardHeader>
						<CardTitle>Name</CardTitle>
					</CardHeader>
					<CardContent>
						<p>Gral Manuel Márquez de León 2340, Zona Central, 23000 La Paz, B.C.S.</p>
					</CardContent>
					<CardFooter>
						<ButtonMap>
							<span>{t("btnMap")}</span>
							<ExternalLink />
						</ButtonMap>
					</CardFooter>
				</Card>
			</div>
		</Container>
	);
}
