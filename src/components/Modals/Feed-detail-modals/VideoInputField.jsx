import { useState } from "react";
import { useCreateComment } from "api/hooks/feeds";
import { MdOutlineAddPhotoAlternate, MdSend } from "react-icons/md";
import "./feed-detail-modal.css";
import Custombutton from "components/Custom-button/Custombutton";
import { AiFillDelete } from "react-icons/ai";

const VideoInputField = ({ postId, onClose }) => {
	const { comment, isLoading } = useCreateComment({
		postId,
		onSuccess: () => {
			onClose()
			setCommentText("");
			setSelectedVideo(null);
		},
		onError: (errorResponse) => {
			console.log({ errorResponse });
		},
	});

	const [commentText, setCommentText] = useState("");
	const [selectedVideo, setSelectedVideo] = useState(null);
	const handleVideoChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setSelectedVideo(file);
		}
	};

	const handleDeleteItem = () => {
		setSelectedVideo(null);
	};

	function handleComment() {
		let commentData = new FormData();
		commentData.append("text_content", commentText);
		commentData.append("file", selectedVideo);
		comment(commentData);
	}
	return (
		<>
			<div className="pic-cont-box">
				{selectedVideo ? (
					<div className="np-pic-bx">
						<div className="delete-item" onClick={handleDeleteItem}>
							<AiFillDelete />
							<div className="del-tss">Delete</div>
						</div>
						<video controls>
							<source
								src={URL.createObjectURL(selectedVideo)}
								type={selectedVideo.type}
							/>
							Your browser does not support the video tag.
						</video>
						{/* {selectedVideo.name} */}
					</div>
				) : (
					<>
						<input
							type="file"
							accept="video/*"
							onChange={handleVideoChange}
							style={{ display: "none" }}
							id="video-input"
						/>
						<label htmlFor="video-input" className="np-pic-bx">
							<MdOutlineAddPhotoAlternate />
							<div className="add-vid">Add Video</div>
						</label>
					</>
				)}
				<hr className="ln-hr" />
				<div className="inp-sen-send">
					<input
						type="text"
						className="pic-inpt"
						placeholder="Start typing"
						onChange={(e) => {
							setCommentText(e.target.value);
						}}
					/>
					<Custombutton
						className="com-icon-btn"
						type="submit"
						onClick={handleComment}
						name={
							isLoading ? (
								""
							) : (
								<MdSend className="cur" size={22} color="#4f0da3" />
							)
						}
						disabled={isLoading}
					/>
				</div>
			</div>
		</>
	);
};

export default VideoInputField;
