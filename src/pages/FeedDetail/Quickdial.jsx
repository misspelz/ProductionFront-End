import React, { useRef, useState } from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { FiEdit } from "react-icons/fi";
// import { FiPlus } from "react-icons/fi";
import {
	MdOutlinePhotoSizeSelectActual,
	MdOndemandVideo,
} from "react-icons/md";
import { BsFileEarmarkText } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa6";
import "./feed-detail.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { RxCross2 } from "react-icons/rx";
import FileInputField from "components/Modals/Feed-detail-modals/FileInputField";
import RecInputField from "components/Modals/Feed-detail-modals/RecInputField";
import PhotoInputField from "components/Modals/Feed-detail-modals/PhotoInputField";
import CommentInputField from "components/Modals/Feed-detail-modals/CommentInputField";
import VideoInputField from "components/Modals/Feed-detail-modals/VideoInputField";

export default function Quickdial({ postId }) {
	const [openModal, setOpenModal] = useState(false);
	const [modalType, setModalType] = useState("");
	const [selectedVideo, setSelectedVideo] = useState(null);
	const [selectedFile, setSelectedFile] = useState(null);
	const [showCommentInput, setShowCommentInput] = useState(false);
	const [showRecInput, setShowRecInput] = useState(false);

	const handleCloseModal = () => {
		setOpenModal(false);
		setModalType("");
	};

	const actions = [
		{
			icon: (
				<button
					className="rounded-full bg-[#c25c09]"
					onClick={() => {
						handleModal("text");
						setOpenModal(true);
					}}
				>
					<FiEdit size={20} color="#fff" />
				</button>
			),
			name: "comment",
		},
		{
			icon: (
				<button
					className="rounded-full bg-[#e01134]"
					onClick={() => {
						handleModal("image");
						setOpenModal(true);
					}}
				>
					<MdOutlinePhotoSizeSelectActual size={20} color="#fff" />
				</button>
			),
			name: "image",
		},
		{
			icon: (
				<button
					className="rounded-full bg-[#037474]"
					onClick={() => {
						handleModal("video");
						setOpenModal(true);
					}}
				>
					<MdOndemandVideo size={20} color="#fff" />
				</button>
			),
			name: "video",
		},
		{
			icon: (
				<button
					className="rounded-full bg-[#066606]"
					onClick={() => {
						handleModal("audio");
						setOpenModal(true);
					}}
				>
					<FaMicrophone size={20} color="#fff" />
				</button>
			),
			name: "record",
		},
		{
			icon: (
				<button
					className="rounded-full bg-[#fff]"
					onClick={() => {
						handleModal("file");
						setOpenModal(true);
					}}
				>
					<BsFileEarmarkText size={20} />
				</button>
			),
			name: "add file",
		},
	];

	const handleModal = (type) => {
		setModalType(type);
	};


	const handleFileChange = (e) => {
		const selected = e.target.files[0];
		if (selected) {
			const fileName = selected.name.toLowerCase();
			if (
				fileName.endsWith(".pdf") ||
				fileName.endsWith(".doc") ||
				fileName.endsWith(".docx") ||
				fileName.endsWith(".xls") ||
				fileName.endsWith(".xlsx") ||
				fileName.endsWith(".ppt") ||
				fileName.endsWith(".pptx") ||
				fileName.endsWith(".exe") ||
				fileName.endsWith(".apk")
			) {
				setSelectedFile(selected);
			} else {
				// Handle invalid file type
				setSelectedFile(null);
				alert(
					"Please select a valid file type (PDF, Word, Excel, PowerPoint, EXE, or APK)."
				);
			}
		}
	};
	return (
		<>
			<Box
				sx={{
					height: 320,
					width: 160,
					transform: "translateZ(0px)",
					flexGrow: 1,
				}}
			>
				<SpeedDial
					ariaLabel="SpeedDial basic example"
					sx={{ position: "absolute", bottom: 1, right: 16 }}
					icon={<SpeedDialIcon />}
					className="quick-dial-wrapper"
				>
					{actions.map((action) => (
						<SpeedDialAction
							key={action.name}
							icon={action.icon}
							tooltipTitle={action.name}
							className="quick-dial-btn-item"
						/>
					))}
				</SpeedDial>
			</Box>

			<Modal keepMounted open={openModal} onClose={handleCloseModal}>
				<Box>
					{/* <div className="flex items-center justify-end mb-2">
						<RxCross2 size={22} onClick={handleCloseModal} cursor={"pointer"} />
					</div> */}
					{modalType === "audio" && (
						<div className="inpu-com-box pic-bx-cont">
							<RecInputField postId={postId} />
						</div>
					)}

					{modalType === "file" && (
						<div className="inpu-com-box pic-bx-cont">
							<FileInputField postId={postId} />
						</div>
					)}

					{modalType === "image" && (
						<div className="inpu-com-box pic-bx-cont">
							<PhotoInputField postId={postId} />
						</div>
					)}
					{modalType === "video" && (
						<div className="inpu-com-box pic-bx-cont">
							<VideoInputField postId={postId} />
						</div>
					)}

					{modalType === "text" && (
						<div className="inpu-com-box pic-bx-cont">
							<CommentInputField postId={postId} />
						</div>
					)}
				</Box>
			</Modal>
		</>
	);
}
