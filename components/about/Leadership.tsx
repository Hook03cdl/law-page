import Image from "next/image";
import {
	ContainerContent,
	ContainerDescription,
	ContainerHeader,
	ContainerItem,
	ContainerTagline,
	ContainerTitle,
} from "../common/Container";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

export default function Leadership() {
	return (
		<ContainerItem>
			<ContainerHeader>
				<ContainerTagline>LEADERSHIP</ContainerTagline>
				<ContainerTitle>The Architects of the Firm</ContainerTitle>
				<ContainerDescription>
					Our partners bring an average of 25 years of experience in international arbitration and corporate governance.
				</ContainerDescription>
			</ContainerHeader>
			<ContainerContent className="grid grid-cols-5 gap-5">
				{Array.from({ length: 5 }, (_, i) => (
					<Card key={i} className="ring-0">
						<div className="relative w-full min-h-100 aspect-7/5">
							<Image
								src={"https://placehold.co/300x400.png"}
								alt={"name"}
								fill
								className="object-cover"
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
						</div>
						<CardHeader className="p-0">
							<CardTitle size="sm">Name</CardTitle>
							<CardDescription className="text-secondary font-semibold">Position</CardDescription>
						</CardHeader>
					</Card>
				))}
			</ContainerContent>
		</ContainerItem>
	);
}
