import { useState } from "react";
import { useCreateComment } from "api/hooks/feeds";
import { MdSend } from "react-icons/md";
import "./feed-detail-modal.css";
import Custombutton from "components/Custom-button/Custombutton";
import { AiFillDelete } from "react-icons/ai";
import { PiMicrosoftPowerpointLogo } from "react-icons/pi";
import { SiMicrosoftword, SiMicrosoftexcel } from "react-icons/si";
import { FaFileAlt } from "react-icons/fa";
import {
	BsFillFileEarmarkPdfFill,
	BsAndroid2,
	BsFiletypeExe,
} from "react-icons/bs";

const FileInputField = ({ postId, onClose }) => {
	const { comment, isLoading } = useCreateComment({
		postId,
		onSuccess: () => {
			setCommentText("");
			setSelectedFile(null);
            onClose()
		},
		onError: (errorResponse) => {
			console.log({ errorResponse });
		},
	});

	const [commentText, setCommentText] = useState("");
	const [selectedFile, setSelectedFile] = useState(null);
	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setSelectedFile(file);
		}
	};

	const handleDeleteItem = () => {
		setSelectedFile(null);
	};

	function handleComment() {
		let commentData = new FormData();
		commentData.append("text_content", commentText);
		commentData.append("file", selectedFile);
		comment(commentData);
	}
	return (
		<>
			<div className="pic-cont-box">
				{selectedFile ? (
					<div className="np-pic-bx">
						<div className="delete-item" onClick={handleDeleteItem}>
							<AiFillDelete />
							<div className="del-tss">Delete</div>
						</div>
						{selectedFile.name.endsWith(".pdf") ? (
							<BsFillFileEarmarkPdfFill className="icon-dw pdf" />
						) : selectedFile.name.endsWith(".doc") ||
						  selectedFile.name.endsWith(".docx") ? (
							<SiMicrosoftword className="icon-dw word" />
						) : selectedFile.name.endsWith(".xls") ||
						  selectedFile.name.endsWith(".xlsx") ? (
							<SiMicrosoftexcel className="icon-dw excel" />
						) : selectedFile.name.endsWith(".ppt") ||
						  selectedFile.name.endsWith(".pptx") ? (
							<PiMicrosoftPowerpointLogo className="icon-dw prese" />
						) : selectedFile.name.endsWith(".exe") ? (
							<BsFiletypeExe className="icon-dw exe" />
						) : (
							<BsAndroid2 className="icon-dw apk" />
						)}

						<div className="file-content-name">{selectedFile.name}</div>
					</div>
				) : (
					<>
						<input
							type="file"
							accept=".pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .exe, .apk"
							onChange={handleFileChange}
							style={{ display: "none" }}
							id="file-input"
						/>
						<label htmlFor="file-input" className="np-pic-bx">
							<FaFileAlt />
							<div className="add-vid">Add File</div>
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

export default FileInputField;
