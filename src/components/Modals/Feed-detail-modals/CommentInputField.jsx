import { useState } from "react";
import { MdSend } from "react-icons/md";
import { useCreateComment } from "api/hooks/feeds";
import Custombutton from "components/Custom-button/Custombutton";
import "./feed-detail-modal.css";

const CommentInputField = ({ postId }) => {
	const { comment, isLoading } = useCreateComment({
		postId,
		onSuccess: (response) => {
			console.log({ response });
			setCommentText("");
		},
		onError: (errorResponse) => {
			console.log({ errorResponse });
		},
	});

	const [commentText, setCommentText] = useState("");

	function handleComment() {
		// handleAddComment(index);
		let commentData = new FormData();
		commentData.append("text_content", commentText);
		// commentData.append("file", null);
		comment(commentData);
	}
	return (
		<>
			<div className="pic-cont-box">
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

export default CommentInputField;
