import { Hammer } from "@/assets/icons/Hammer";
import { Building2, Landmark, Scale, ScrollText } from "lucide-react";

interface Specialities {
	icon: React.ElementType;
	name: string;
	description: string;
	href: string;
}
export const specialities: Specialities[] = [
	{
		href: "/",
		name: "Family law",
		description: "Strategic guidance for complex mergers, acquisitions, and cross-border structuring.",
		icon: Scale,
	},
	{
		href: "/",
		name: "Litigation",
		description: "Securing high-value assets and navigating international property regulations.",
		icon: Hammer,
	},
	{
		href: "/",
		name: "Commercial law",
		description: "Strategic guidance for high-value residential and commercial property acquisitions and development.",
		icon: Building2,
	},
	{
		href: "/",
		name: "Wills and intestacy",
		description: "High-stakes advocacy with a focus on arbitration and resolution excellence.",
		icon: ScrollText,
	},
	{
		href: "/",
		name: "Intestate",
		description: "Optimizing fiscal efficiency for multinational entities and high-net-worth individuals.",
		icon: Landmark,
	},
];
