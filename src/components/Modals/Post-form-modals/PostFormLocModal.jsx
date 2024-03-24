import { BsAndroid2 } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import "./post-modal.css";
import { useEffect } from "react";
import { useGetGoogleLocation } from "api/hooks/feeds";
import LocationMap from "./LocationMap";
import { MdLocationOn } from "react-icons/md";

const PostFormLocationModal = ({ location, setLocation }) => {
	const handleGetLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const latitude = position.coords.latitude;
					const longitude = position.coords.longitude;
					setLocation({ latitude, longitude });
				},
				(error) => {
					console.error("Error getting location:", error);
				}
			);
		} else {
			alert("Geolocation is not supported by your browser.");
		}
	};

	const { data } = useGetGoogleLocation({
		latitude: location?.latitude,
		longitude: location?.longitude,
	});

	const handleDeleteLocation = () => {
		setLocation(null);
	};

	useEffect(() => {
		// Automatically get the user's location when the component mounts
		handleGetLocation();
	}, []);

	return (
		<>
			<div className="post-audio-cont-box">
				{location ? (
					<div className="location-item">
						{/* Display the user's current location */}
						<div className="location-container">
							<div className="location-address">
								<MdLocationOn /> {data?.[0]?.formatted_address}
							</div>
							<div className="location-wrapper">
								{location?.latitude && location?.longitude && (
									<LocationMap
										lat={location?.latitude}
										lng={location?.longitude}
									/>
								)}
							</div>
						</div>
						<div className="de-aud">
							<div className="delete-audio" onClick={handleDeleteLocation}>
								<AiFillDelete />
								<div className="del-tss">Delete</div>
							</div>
						</div>
					</div>
				) : (
					<>
						<button onClick={handleGetLocation} className="get-location-button">
							Get Current Location
						</button>
					</>
				)}
			</div>
		</>
	);
};

export default PostFormLocationModal;
