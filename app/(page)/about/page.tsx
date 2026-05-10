import {
	Container,
	ContainerDescription,
	ContainerHeader,
	ContainerItem,
	ContainerTitle,
} from "@/components/common/Container";

export default function AboutPage() {
	return (
		<Container>
			<ContainerItem>
				<ContainerHeader className="grid grid-cols-2 gap-10">
					<div className="space-y-10">
						<ContainerTitle size="xl">Architecture of Justice. Restraint in Practice.</ContainerTitle>
						<ContainerDescription className="max-w-xl">
							Founded on the principles of stability and meticulous cross-border intelligence, Legal Authority operates
							at the intersection of high- stakes corporate law and architectural precision. We do not merely represent;
							we construct frameworks for long-term legal security.
						</ContainerDescription>
					</div>
					<div>
						<div className="border border-border bg-surface p-10 mt-10 space-y-3">
							<p className="text-secondary">ESTABLISHED 1994</p>
							<p className="italic text-primary/80">
								{
									'"In the complex landscape of MX/US relations, silence is often the most powerful strategy, and precision	the only acceptable outcome."'
								}
							</p>
						</div>
					</div>
				</ContainerHeader>
			</ContainerItem>
		</Container>
	);
}
