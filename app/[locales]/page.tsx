import { Container } from "@/components/common/Container";

import ConsultationBanner from "@/components/home/ConsultationBanner";
import CoreSpecialties from "@/components/home/CoreSpecialties";
import Hero from "@/components/home/Hero";
import ValueProposition from "@/components/home/ValueProposition";

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
