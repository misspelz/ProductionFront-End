import CommentPerPost from "../../components/Dashboard/CommentPerPost";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Quickdial from "./Quickdial";
import "./feed-detail.css";
import Follower from "components/Dashboard/Follower";
import DashMessage from "components/Dashboard/DasMess";
import SelectCategory from "components/Dashboard/SelectCategory";
import { useGetComments, useGetPostById } from "api/hooks/feeds";
import { PiMicrosoftPowerpointLogo } from "react-icons/pi";
import { SiMicrosoftword, SiMicrosoftexcel } from "react-icons/si";
import {
	BsAndroid2,
	// BsFiletypeExe,
	BsFillFileEarmarkPdfFill,
	// BsFiletypeExe,
} from "react-icons/bs";


const domainUrl = "https://development.2geda.net";

const DisplayMedia = ({ mediaFile }) => {
	const renderFileIcon = (fileType) => {
		if (fileType?.endsWith("pdf")) {
			return <BsFillFileEarmarkPdfFill className="icon-dw pdf" size={24} />;
		}
		if (fileType?.endsWith("doc") || fileType?.endsWith("docx")) {
			return <SiMicrosoftword className="icon-dw word" size={24} />;
		}
		if (fileType?.endsWith("xls") || fileType?.endsWith("xlsx")) {
			return <SiMicrosoftexcel className="icon-dw excel" size={24} />;
		}
		if (fileType?.endsWith("ppt")) {
			return <PiMicrosoftPowerpointLogo className="icon-dw prese" size={24} />;
		}
		if (fileType?.endsWith("exe")) {
			return <PiMicrosoftPowerpointLogo className="icon-dw prese" size={24} />;
		}
		if (fileType?.endsWith("apk")) {
			return <BsAndroid2 className="icon-dw apk" size={24} />;
		}
	};
	if (mediaFile?.file_type?.includes("audio")) {
		const fileName = mediaFile.file.split("/")[3];
		return (
			<div>
				<p>{fileName}</p>
				<audio controls>
					<source src={domainUrl + mediaFile.file} type={mediaFile.file_type} />
				</audio>
			</div>
		);
	}
	if (mediaFile?.file_type?.includes("image")) {
		return <img src={domainUrl + mediaFile.file} alt="" />;
	}
	if (mediaFile?.file_type?.includes("video")) {
		return (
			<video width="100%" height="180" controls>
				<source src={domainUrl + mediaFile.file} type={mediaFile.file_type} />
				Your browser does not support the video tag.
			</video>
		);
	}
	if (mediaFile?.file_type?.includes("application")) {
		const fileName = mediaFile.file.split("/")[3];
		return (
			<a
				href={domainUrl + mediaFile.file}
				rel="noopener noreferrer"
				download
				className="document-media"
			>
				<div>{renderFileIcon(mediaFile?.file)}</div>
				<span>{fileName}</span>
			</a>
		);
	}
};

const FeedDetail = () => {
	const { feedId } = useParams();
	const { data, isLoading, isError, isSuccess } = useGetPostById(feedId);
	const getComments = useGetComments(feedId);
	const navigate = useNavigate();

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
						<div className="post-display-content">
							<p>{data?.text_content}</p>
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
