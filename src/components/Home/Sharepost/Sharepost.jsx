import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FiShare2 } from "react-icons/fi";
import { MdOutlineContentCopy } from "react-icons/md";
import { useFeedsRepost } from "api/hooks/feeds";

const Sharepost = ({ postId, postData }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const { repost } = useFeedsRepost({
		postId,
		onSuccess: (response) => {
			console.log({ response });
			handleClose();
		},
		onError: (errorResponse) => {
			console.log({ errorResponse });
		},
	});

    const { created_at, id, ...rest } = Object.assign({}, postData);

	const handleRepost = () => {
		repost(rest);
	};

	const handleCopyUrl = async () => {
		const urlText = window.location.href.includes("Home")
			? `${window.location.href}/${postId}`
			: `${window.location.href}Home/${postId}`;
		try {
			await navigator.clipboard.writeText(urlText);
			console.log("copied", urlText);
		} catch (err) {
			console.error("Failed to copy: ", err);
		}
		handleClose();
	};

	return (
		<div className="share-post-container">
			<Button
				aria-controls={open ? "demo-positioned-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
				style={{
					background: "transparent",
					minWidth: "fit-content",
					padding: 0,
				}}
			>
				<FiShare2 size={22} color="#000000b9" />
			</Button>
			<Menu
				id="positioned-menu"
				aria-labelledby="positioned-button"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				slotProps={{
					paper: {
						elevation: 0,
						sx: { marginLeft: -8 },
					},
				}}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "left",
				}}
				className="share-post-dropdown"
			>
				<MenuItem
					onClick={handleRepost}
					sx={{
						fontSize: "14px",
						display: "flex",
						alignItems: "center",
						gap: "4px",
					}}
				>
					<FiShare2 /> share post on 2geda
				</MenuItem>
				<MenuItem
					onClick={handleCopyUrl}
					sx={{
						fontSize: "14px",
						display: "flex",
						alignItems: "center",
						gap: "4px",
					}}
				>
					<MdOutlineContentCopy /> copy post url
				</MenuItem>
			</Menu>
		</div>
	);
};

export default Sharepost;
