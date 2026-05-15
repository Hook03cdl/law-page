"use client";

import { MapPin } from "lucide-react";
import { Map, MapControls, MapMarker, MarkerContent, MarkerPopup, MarkerTooltip } from "../ui/map";

export default function MapController() {
	return (
		<Map center={[-110.320368, 24.153023]} zoom={15}>
			<MapMarker latitude={24.153023} longitude={-110.320368}>
				<MarkerContent>
					<MapPin className="fill-destructive text-white size-10" />
				</MarkerContent>
				<MarkerTooltip>The firm</MarkerTooltip>
				<MarkerPopup>
					<div className="space-y-1">
						<p className="text-foreground font-medium">The firm</p>
						{/* <p className="text-muted-foreground text-xs">
									 {location.lat.toFixed(4)}, {location.lng.toFixed(4)} 
								</p> */}
					</div>
				</MarkerPopup>
			</MapMarker>
			<MapControls />
		</Map>
	);
}
