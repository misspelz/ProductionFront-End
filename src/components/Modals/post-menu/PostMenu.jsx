import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import "./post-menu.css"
import {  BiDotsHorizontalRounded } from "react-icons/bi";
import { useSavePost } from 'api/hooks/feeds';

const PostMenu = ({ postId }) => {
	const savePost = useSavePost({
		onSuccess: (response) => {
			console.log({ response });
            handleClose()
		},
		onError: (errorResponse) => {
			console.log({ errorResponse });
		},
	});

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleSavePost = () => {
		savePost.savePost(postId);
	};

	return (
		<div className="post-menu-container">
			<Button
				aria-controls={open ? "demo-positioned-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
				style={{ background: "transparent" }}
			>
				<BiDotsHorizontalRounded />
			</Button>
			<Menu
				id="demo-positioned-menu"
				aria-labelledby="demo-positioned-button"
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
				className="post-menu-dropdown"
			>
				<MenuItem onClick={handleClose}>Promote post</MenuItem>
				<MenuItem onClick={handleClose}>Report Abuse</MenuItem>
				<MenuItem onClick={handleClose}>See more of this</MenuItem>
				<MenuItem onClick={handleSavePost}>{savePost.isLoading ? "Saving" : "Save Post"}</MenuItem>
				<MenuItem onClick={handleClose}>Block User</MenuItem>
			</Menu>
		</div>
	);
};

export default PostMenu;
