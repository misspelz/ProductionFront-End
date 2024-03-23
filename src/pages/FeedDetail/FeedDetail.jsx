import CommentPerPost from "../../components/Dashboard/CommentPerPost";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Quickdial from "./Quickdial";
import "./feed-detail.css";
import Follower from "components/Dashboard/Follower";
import DashMessage from "components/Dashboard/DasMess";
import SelectCategory from "components/Dashboard/SelectCategory";
import {
	useGetComments,
	useGetGoogleLocation,
	useGetPostById,
} from "api/hooks/feeds";
import DisplayMedia from "components/Home/Displaymedia/Displaymedia";
import LocationMap from "components/Modals/Post-form-modals/LocationMap";
import { MdLocationOn } from "react-icons/md";

const FeedDetail = () => {
	const { feedId } = useParams();
	const { data } = useGetPostById(feedId);
	const getComments = useGetComments(feedId);
	const navigate = useNavigate();

	const coordinates = data?.location?.split(",");
	const getLocation = useGetGoogleLocation({
		latitude: coordinates?.[0],
		longitude: coordinates?.[1],
	});

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="main-containe">
			<div className="left-side-container">
				<div className="feed-detail-container">
					<div className="feed-top">
						<FaArrowLeftLong
							size={20}
							color="#000"
							onClick={() => {
								navigate(-1);
							}}
							style={{ cursor: "pointer" }}
						/>
						<h3>Full preview</h3>
					</div>
					<hr className="feed_hr" />
					<div className="post-preview-container">
						<div className="post-display-images">
							{data?.files?.map((file) => (
								<DisplayMedia mediaFile={file} key={file?.file_id} />
							))}
						</div>
						{data?.location != null && (
							<div className="location-container">
								<div className="location-address">
									<MdLocationOn /> {getLocation?.data?.[0]?.formatted_address}
								</div>
								<div className="location-wrapper">
									{coordinates?.[0] && coordinates?.[1] && (
										<LocationMap
											lat={Number(coordinates?.[0])}
											lng={Number(coordinates?.[1])}
										/>
									)}
								</div>
							</div>
						)}
						<div className="post-display-content">
							<p>{data?.text_content == "null" ? "" : data?.text_content}</p>
						</div>
					</div>
					<div className="comm-bx-pos">
						{getComments.data?.comments?.map((comment) => (
							<CommentPerPost
								comment={comment}
								key={comment?.id}
								postId={feedId}
							/>
						))}
					</div>
					<div className="quick-dial-container">
						<Quickdial postId={feedId} />
					</div>
				</div>
			</div>
			<div className="middle-side-container">
				<img src="images/ads1.png" alt="" />
				<img src="images/ads2.png" alt="" />
				<img src="images/ads3.png" alt="" />
			</div>
			<div className="right-side-container">
				<SelectCategory />
				<Follower />
				<div className="mess-bxx-conn">
					<DashMessage />
				</div>
			</div>
		</div>
	);
};

export default FeedDetail;
