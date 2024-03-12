import { useState } from "react";
import { url } from "../../utils";
import { useCreateComment } from "api/hooks/feeds";
import Custombutton from "components/Custom-button/Custombutton";

const Comment = ({
	disnone,
	postID,
	commentList,
	setCommentList,
	likeList,
	setLikeList,
	index,
}) => {
	const { comment, isLoading } = useCreateComment({
		postId: postID,
		onSuccess: (response) => {
			console.log({ response });
			setCommentText("");
		},
		onError: (errorResponse) => {
			console.log({ errorResponse });
		},
	});
	const [commentText, setCommentText] = useState("");

	//   function handleAddComment(index) {
	//     setCommentList([...commentList, index]);
	//   }

	function handleComment() {
		// handleAddComment(index);
		const commentData = new FormData();
		commentData.append("text_content", commentText);
		// commentData.append("file", null);
		comment(commentData);
	}

	return (
		<div className={`comment-container ${disnone}`}>
			<div className="post-ead">Comment</div>
			<div className="inp-coment">
				<textarea
					name=""
					className="comment-inp"
					id=""
					value={commentText}
					placeholder="Your comment goes here"
					onChange={(e) => {
						setCommentText(e.target.value);
					}}
				></textarea>
				<div className="com-btn-box">
					<Custombutton
						className="com-btn"
						type="submit"
						onClick={handleComment}
						name={isLoading ? "Posting" : "Post"}
						disabled={isLoading}
					/>
				</div>
			</div>
		</div>
	);
};

export default Comment;
