import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const LocationMap = ({ lat, lng }) => {
	const GOOGLE_API_KEY = "AIzaSyBFU5z4QfEvabpt01y8UvzUBJBCJt0nxg0";
	const libraries = ["places"];
	const mapContainerStyle = {
		width: "100vw",
		height: "150px",
	};
	const center = {
		lat, // default latitude
		lng, // default longitude
	};

	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: GOOGLE_API_KEY,
		libraries,
	});

	if (loadError) {
		return <div>Error loading maps</div>;
	}

	if (!isLoaded) {
		return <div>Loading maps</div>;
	}
	return (
		<div>
			<GoogleMap
				mapContainerStyle={mapContainerStyle}
				zoom={12}
				center={center}
			>
				<Marker position={center} />
			</GoogleMap>
		</div>
	);
};

export default LocationMap;
