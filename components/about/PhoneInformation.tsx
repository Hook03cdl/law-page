import { ArrowRight } from "lucide-react";
import { ContainerContent, ContainerHeader, ContainerItem, ContainerTitle } from "../common/Container";
import Link from "next/link";
import Image from "next/image";

export default function PhoneInformation() {
	return (
		<ContainerItem>
			<div className="grid grid-cols-2 gap-10">
				<div className="space-y-10">
					<ContainerHeader>
						<ContainerTitle>Alcance global, autoridad local.</ContainerTitle>
					</ContainerHeader>
					<ContainerContent className="space-y-10">
						<Link href={"/"} className="h-20 flex justify-between items-center border-b hover:bg-surface">
							<div>
								<p className="text-secondary">México</p>
								<p className="font-bold text-primary">+52 (000) 000 0000</p>
							</div>
							<ArrowRight className="text-primary/30" />
						</Link>
						<Link href={"/"} className="h-20 flex justify-between items-center border-b hover:bg-surface">
							<div>
								<p className="text-secondary">United Stated</p>
								<p className="font-bold text-primary">+1 (00) 0000 0000</p>
							</div>
							<ArrowRight className="text-primary/30" />
						</Link>
					</ContainerContent>
				</div>
				<Image
					src={"https://placehold.co/750x450.png"}
					alt={"Paisaje"}
					width={750}
					height={450}
					className="aspect-video object-cover"
				/>
			</div>
		</ContainerItem>
	);
}
