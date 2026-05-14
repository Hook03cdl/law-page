import Link from "next/link";
import {
	ContainerContent,
	ContainerDescription,
	ContainerHeader,
	ContainerItem,
	ContainerTitle,
} from "../common/Container";
import { Button } from "../ui/button";

export default function ConsultationBanner() {
	return (
		<ContainerItem className="bg-primary">
			<ContainerHeader>
				<ContainerTitle className="text-center text-primary-foreground font-semibold text-4xl">
					Ready to Secure Your Legal Authority?
				</ContainerTitle>
				<div className="flex justify-center">
					<ContainerDescription className="text-center text-base text-primary-foreground/60 max-w-3/7">
						Consult with our senior partners today to discuss your cross-border strategy and secure your interests with
						world-class representation.
					</ContainerDescription>
				</div>
			</ContainerHeader>
			<ContainerContent className="flex justify-center">
				<Button variant={"inverted"} size={"xl"} asChild>
					<Link href={"/contact"}>SCHEDULE YOUR CONSULTATION</Link>
				</Button>
			</ContainerContent>
		</ContainerItem>
	);
}
