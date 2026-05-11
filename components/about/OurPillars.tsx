import { DraftingCompass, Globe, Scale } from "lucide-react";
import {
	ContainerContent,
	ContainerHeader,
	ContainerItem,
	ContainerTagline,
	ContainerTitle,
} from "../common/Container";
import { Card, CardContent, CardHeader, CardIcon, CardTitle } from "../ui/card";

export default function OurPillars() {
	return (
		<ContainerItem className="bg-primary text-primary-foreground">
			<ContainerHeader>
				<ContainerTagline>MISSION & CORE VALUES</ContainerTagline>
				<ContainerTitle className="text-primary-foreground">The Pillars of Name</ContainerTitle>
			</ContainerHeader>
			<ContainerContent>
				<div className="grid grid-cols-3 gap-2 bg-accent/20 p-3">
					<Card className="bg-primary text-accent-foreground">
						<CardHeader>
							<CardIcon>
								<Scale />
							</CardIcon>
							<CardTitle>Absolute Restraint</CardTitle>
						</CardHeader>
						<CardContent>
							<p>
								We operate with quiet efficiency. No unnecessary noise, no performative litigation. Only strategic
								movements that yield definitive results.
							</p>
						</CardContent>
					</Card>
					<Card className="bg-primary text-accent-foreground">
						<CardHeader>
							<CardIcon>
								<DraftingCompass />
							</CardIcon>
							<CardTitle>Structural Integrity</CardTitle>
						</CardHeader>
						<CardContent>
							<p>
								Every contract we draft is an architectural feat. We build legal structures designed to withstand the
								pressures of fluctuating markets and changing political climates.
							</p>
						</CardContent>
					</Card>
					<Card className="bg-primary text-accent-foreground">
						<CardHeader>
							<CardIcon>
								<Globe />
							</CardIcon>
							<CardTitle>Cross-Border Fluency</CardTitle>
						</CardHeader>
						<CardContent>
							<p>
								We translate complex legal frameworks between Mexico and the United States, providing a seamless bridge
								for multi- national corporate interests.
							</p>
						</CardContent>
					</Card>
				</div>
			</ContainerContent>
		</ContainerItem>
	);
}
