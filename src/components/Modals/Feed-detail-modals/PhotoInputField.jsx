import { useState } from "react";
import { useCreateComment } from "api/hooks/feeds";
import { MdOutlineAddPhotoAlternate, MdSend } from "react-icons/md";
import "./feed-detail-modal.css";
import Custombutton from "components/Custom-button/Custombutton";
import { AiFillDelete } from "react-icons/ai";

const PhotoInputField = ({ postId }) => {
	const { comment, isLoading } = useCreateComment({
		postId,
		onSuccess: (response) => {
			console.log({ response });
			setCommentText("");
            setSelectedImage(null)
		},
		onError: (errorResponse) => {
			console.log({ errorResponse });
		},
	});

	const [commentText, setCommentText] = useState("");
	const [selectedImage, setSelectedImage] = useState(null);
	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
            setSelectedImage(file);
		}
	};

    
	const handleDeleteItem = () => {
		setSelectedImage(null);
	};

	function handleComment() {
		let commentData = new FormData();
		commentData.append("text_content", commentText);
		commentData.append("file", selectedImage);
		comment(commentData);
	}
	return (
		<>
			<div className="pic-cont-box">
				{selectedImage ? (
					<div className="np-pic-bx">
						<div className="delete-item" onClick={handleDeleteItem}>
							<AiFillDelete />
							<div className="del-tss">Delete</div>
						</div>
						<img
							src={URL.createObjectURL(selectedImage)}
							alt=""
							className="tem-pic"
						/>
					</div>
				) : (
					<>
						<input
							type="file"
							accept="image/*"
							onChange={handleImageChange}
							style={{ display: "none" }}
							id="image-input"
						/>
						<label htmlFor="image-input" className="np-pic-bx">
							<MdOutlineAddPhotoAlternate />
							<div className="add-vid">Add Photo</div>
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

export default PhotoInputField;
