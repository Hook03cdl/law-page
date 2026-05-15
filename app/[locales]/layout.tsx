import FloatButtonWhatsapp from "@/components/common/FloatButtonWhatsapp";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import { NextIntlClientProvider } from "next-intl";

interface PageLayoutProps {
	children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
	return (
		<NextIntlClientProvider>
			<Header />
			<FloatButtonWhatsapp />
			{children}
			<Footer />
		</NextIntlClientProvider>
	);
}
