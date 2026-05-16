/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";

export function useLocation() {
	const [location, setLocation] = useState<GeolocationPosition | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!("geolocation" in navigator)) {
			setError("La geolocalización no está soportada en este navegador.");
			return;
		}

		navigator.geolocation.getCurrentPosition(
			(pos) => setLocation(pos),
			(err) => setError(err.message),
			{ enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
		);
	}, []);

	return { location, error };
}
