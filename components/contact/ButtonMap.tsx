"use client";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { MapPin } from "lucide-react";
import { Map, MapControls, MapMarker, MarkerContent, MarkerPopup, MarkerTooltip } from "../ui/map";

export default function ButtonMap({ children }: { children: React.ReactNode }) {
	const t = useTranslations("ContactPage.dialog");
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant={"link"} size={"xl"} className="text-secondary px-0">
					{children}
				</Button>
			</DialogTrigger>
			<DialogContent className="min-w-[95svw] max-md:p-0!">
				<DialogHeader className="px-5 pt-2">
					<DialogTitle className="uppercase">{t("title")}</DialogTitle>
				</DialogHeader>
				<div className="h-[80svh]">
					<Map center={[-110.320368, 24.153023]} zoom={15} className="h-full">
						<MapMarker latitude={24.153023} longitude={-110.320368}>
							<MarkerContent>
								<MapPin className="fill-destructive text-white size-10" />
							</MarkerContent>
							<MarkerTooltip>The firm</MarkerTooltip>
							<MarkerPopup>
								<div className="space-y-1 text-base">
									<p className="text-primary text-lg font-black">The firm</p>
									<div>
										<p className="font-bold">Schedules</p>
										<p className="text-foreground font-medium">
											{t("schedules")} <span>8:00 - 15:00</span>
										</p>
									</div>
								</div>
							</MarkerPopup>
						</MapMarker>
						<MapControls />
					</Map>
				</div>
			</DialogContent>
		</Dialog>
	);
}
