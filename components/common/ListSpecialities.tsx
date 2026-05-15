"use client";
import { Card, CardContent, CardHeader, CardIcon, CardTitle } from "../ui/card";
import { cn } from "@/lib/utils";
import useListSpecialties from "@/hooks/useListSpecialties";

// interface Specialities {
// 	icon: React.ElementType;
// 	name: string;
// 	description: string;
// 	href: string;
// }

interface ListSpecialtiesProps {
	length?: number;
	className?: string;
	classNameTitle?: string;
	classNameDescription?: string;
	classNameIcon?: string;
	iconDecorator?: boolean;
}

export default function ListSpecialities({
	length,
	className,
	classNameDescription,
	classNameIcon,
	classNameTitle,
	iconDecorator = false,
}: ListSpecialtiesProps) {
	const specialities = useListSpecialties();

	const list = length ? specialities.slice(0, length) : specialities;

	return list.map(({ description, name, icon: Icon }) => (
		<Card key={name} className={cn(iconDecorator && "first:relative group/card", className)}>
			<div className="flex flex-col justify-center">
				<CardHeader>
					<CardIcon>
						<Icon className={classNameIcon} />
					</CardIcon>
					<CardTitle className={classNameTitle}>{name}</CardTitle>
				</CardHeader>
				<CardContent className="mt-5">
					<p className={classNameDescription}>{description}</p>
				</CardContent>
			</div>
			{iconDecorator && (
				<Icon className="group-first/card:block hidden absolute right-10 top-10 text-border opacity-50 size-20" />
			)}
		</Card>
	));
}
