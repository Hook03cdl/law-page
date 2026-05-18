import Link from "next/link";
import {
	ContainerContent,
	ContainerHeader,
	ContainerTagline,
	ContainerTitle,
	ContainerAction,
	ContainerItem,
} from "../common/Container";
import { Button } from "../ui/button";
import { getTranslations } from "next-intl/server";
import ListSpecialities from "../common/ListSpecialities";

// const ListSpecialities = dynamic(() => import("../common/ListSpecialities"), { ssr: true });

export default async function CoreSpecialties() {
	const t = await getTranslations("HomePage.core");
	return (
		<ContainerItem className="bg-surface">
			<ContainerHeader>
				<ContainerTagline>{t("tagline")}</ContainerTagline>
				<ContainerTitle>{t("title")}</ContainerTitle>
				<ContainerAction>
					<Button variant={"link"} asChild>
						<Link href={"/specialties"}>{t("link")}</Link>
					</Button>
				</ContainerAction>
			</ContainerHeader>
			<ContainerContent className="grid lg:grid-cols-3 gap-5 lg:gap-10">
				<ListSpecialities length={3} />
			</ContainerContent>
		</ContainerItem>
	);
}
