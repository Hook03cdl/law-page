import FloatButtonWhatsapp from "@/components/common/FloatButtonWhatsapp";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import { NextIntlClientProvider } from "next-intl";

export default function LocalesLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<NextIntlClientProvider>
				<Header />
				<FloatButtonWhatsapp />
				{children}
				<Footer />
			</NextIntlClientProvider>
		</>
	);
}
