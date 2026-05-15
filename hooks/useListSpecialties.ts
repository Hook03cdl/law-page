import { Hammer } from "@/assets/icons/Hammer";
import { Building2, Landmark, Scale, ScrollText } from "lucide-react";
import { useTranslations } from "next-intl";

export default function useListSpecialties() {
	const icons = [Scale, Hammer, Building2, ScrollText, Landmark];
	const t = useTranslations("specialties");
	const list = icons.map((icon, i) => {
		return {
			name: t(`${i}.title`),
			description: t(`${i}.description`),
			icon,
		};
	});
	return list;
}
