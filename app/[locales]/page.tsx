import { Container } from "@/components/common/Container";

import Hero from "@/components/home/Hero";
import CoreSpecialties from "@/components/home/CoreSpecialties";
import ValueProposition from "@/components/home/ValueProposition";
import ConsultationBanner from "@/components/home/ConsultationBanner";

export default function HomePage() {
	return (
		<Container>
			<Hero />
			<CoreSpecialties />
			<ValueProposition />
			<ConsultationBanner />
		</Container>
	);
}
