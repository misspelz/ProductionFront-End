import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BiLike } from "react-icons/bi";
import "./like-post.css";
import {
	EmojiLaughing,
	EmojiSad,
	EmojiAngry,
	EmojiSurprised,
	ThumbsUp,
	ThumbsDown,
} from "assets/custom-icons";
import { EmojiHug } from "assets/custom-icons/Emojihug";
import { useCreateReaction } from "api/hooks/feeds";
import CircularProgress from "@mui/material/CircularProgress";

/**********************************************************************************
 * Reactions DTO to corresponding ID's
 * Like: 1, Dislike: 2, Love/ Hug: 3, Sad: 4, Angry: 5, Surprised: 6, Laughing: 7
***********************************************************************************/

const Likepost = ({ postId }) => {
    const { reaction, isLoading, isSuccess } = useCreateReaction({
			postId,
			onSuccess: (response) => {
				console.log({ response });
			},
			onError: (errorResponse) => {
				console.log({ errorResponse });
			},
		});
	const [anchorEl, setAnchorEl] = useState(null);
	// const [reactionData, setReactionData] = useState({});
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

    const handleReact = (reactionId) => {
        reaction({ reaction_type: reactionId });
        handleClose();
    }


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
					color: "#000000b9",
				}}
				disabled={isLoading}
			>
				{isLoading ? (
					<CircularProgress size={20} color="inherit" />
				) : (
					<BiLike size={24} color={isSuccess ? "blue" : "#000000b9"} />
				)}
			</Button>
			<Menu
				id="share-menu"
				aria-labelledby="share-button"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				slotProps={{
					paper: {
						elevation: 0,
						sx: { marginTop: -4 },
					},
				}}
				anchorOrigin={{
					vertical: "top",
					horizontal: "left",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "left",
				}}
				className="like-post-dropdown"
			>
				<MenuItem
					onClick={() => {
						handleReact(1);
					}}
				>
					<ThumbsUp />
				</MenuItem>
				<MenuItem
					onClick={() => {
						handleReact(2);
					}}
				>
					<ThumbsDown />
				</MenuItem>
				<MenuItem
					onClick={() => {
						handleReact(3);
					}}
				>
					<EmojiHug />
				</MenuItem>
				<MenuItem
					onClick={() => {
						handleReact(4);
					}}
				>
					<EmojiLaughing />
				</MenuItem>
				<MenuItem
					onClick={() => {
						handleReact(5);
					}}
				>
					<EmojiSad />
				</MenuItem>
				<MenuItem
					onClick={() => {
						handleReact(6);
					}}
				>
					<EmojiAngry />
				</MenuItem>
				<MenuItem
					onClick={() => {
						handleReact(7);
					}}
				>
					<EmojiSurprised />
				</MenuItem>
			</Menu>
		</div>
	);
};

export default Likepost;
