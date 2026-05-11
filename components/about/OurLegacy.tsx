import Image from "next/image";
import { ContainerItem, ContainerContent, ContainerTitle, ContainerHeader } from "../common/Container";

export default function OurLegacy() {
	return (
		<ContainerItem className="grid grid-cols-3 gap-10 min-h-[calc(100svh-80px)]">
			<ContainerContent>
				<ContainerTitle>
					<span className="relative after:absolute after:top-full after:left-0 after:h-1 after:w-full after:bg-secondary">
						Our
					</span>{" "}
					Legacy
				</ContainerTitle>
			</ContainerContent>
			<div className="col-span-2 grid grid-cols-subgrid">
				<div className="relative w-full h-full aspect-4/5">
					<Image
						src={"/images/tower.jpg"}
						alt={"Tower"}
						fill
						className="object-cover"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</div>
				<ContainerContent className="space-y-10">
					<ContainerHeader>
						<ContainerTitle>Three Decades of Sovereignty</ContainerTitle>
					</ContainerHeader>
					<div className="space-y-5">
						<p>
							What began as a boutique advisory for cross- border architectural ventures in Mexico City has evolved into
							a comprehensive legal authority. We bridged the gap between jurisdictions, ensuring that corporate assets
							remained protected under the strictest interpretations of international law.
						</p>
						<p>
							Our history is defined by the cases we {"didn't"} have to litigate—agreements so airtight they precluded
							the possibility of dispute.
						</p>
					</div>
				</ContainerContent>
			</div>
		</ContainerItem>
	);
}
