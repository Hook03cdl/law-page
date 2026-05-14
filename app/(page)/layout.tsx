import FloatButtonWhatsapp from "@/components/common/FloatButtonWhatsapp";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

interface PageLayoutProps {
	children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
	return (
		<>
			<Header />
			<FloatButtonWhatsapp />
			{children}
			<Footer />
		</>
	);
}
