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
import dynamic from "next/dynamic";

const ListSpecialities = dynamic(() => import("../common/ListSpecialities"), { ssr: true });

export default function CoreSpecialties() {
	return (
		<ContainerItem className="bg-surface">
			<ContainerHeader>
				<ContainerTagline>PRECISION JURISPRUDENCE</ContainerTagline>
				<ContainerTitle>Core Specialties</ContainerTitle>
				<ContainerAction>
					<Button variant={"link"} asChild>
						<Link href={"/specialties"}>VIEW ALL AREAS</Link>
					</Button>
				</ContainerAction>
			</ContainerHeader>
			<ContainerContent className="grid grid-cols-3 gap-10">
				<ListSpecialities length={3} />
			</ContainerContent>
		</ContainerItem>
	);
}
