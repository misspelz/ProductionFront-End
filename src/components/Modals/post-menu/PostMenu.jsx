import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./post-menu.css";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { usePromotePost, useReportPost, useSavePost } from "api/hooks/feeds";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import PromoteIllustration from "assets/images/promote-post-illustration.png";
import { RxCross2 } from "react-icons/rx";
import Custombutton from "components/Custom-button/Custombutton";

const PostMenu = ({ postId }) => {
	const promotePost = usePromotePost({
		onSuccess: (response) => {
			console.log({ response });
			handleClose();
            handleClosePromoteModal()
		},
		onError: (errorResponse) => {
			console.log({ errorResponse });
		},
	});

	const reportPost = useReportPost({
		onSuccess: (response) => {
			console.log({ response });
			handleClose();
            handleCloseReportModal()
		},
		onError: (errorResponse) => {
			console.log({ errorResponse });
		},
	});

	const savePost = useSavePost({
		onSuccess: (response) => {
			console.log({ response });
			handleClose();
		},
		onError: (errorResponse) => {
			console.log({ errorResponse });
		},
	});

	const [anchorEl, setAnchorEl] = useState(null);
	const [plan, setPlan] = useState({
		id: 0,
		title: "",
	});
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

	const [isOpen, setIsOpen] = useState(false);
	const [isPromoteOpen, setIsPromoteOpen] = useState(false);
	const [isReport, setIsReport] = useState(false);
	const [reportText, setReportText] = useState("");

	const handleCloseModal = () => setIsOpen(false);
	const handleClosePromoteModal = () => {
		setIsPromoteOpen(false);
		setPlan({ id: 0, title: "" });
	};

	const handleReportModal = () => {
		setIsReport(true);
		handleClose();
	};

	const handleCloseReportModal = () => {
		setIsReport(false);
		setReportText("");
	};

	const handleReport = (e) => {
		e.preventDefault();
		if (reportText.trim() != "") {
			reportPost.report({
				post: postId,
				reason: reportText,
			});
		}
	};

	const handleBlockUser = () => {
		setIsOpen(true);
		handleClose();
	};

	const handlePromoteModal = () => {
		setIsPromoteOpen(true);
		handleClose();
	};

	const handlePromotePost = () => {
		promotePost.promote({
			post: postId,
			plan: plan.id,
			description: "promote this post",
		});
	};

	const setActive = (val) => {
		return val ? "plan-checked" : "";
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
				<MenuItem onClick={handlePromoteModal}>Promote post</MenuItem>
				<MenuItem onClick={handleReportModal}>Report Abuse</MenuItem>
				<MenuItem onClick={handleClose}>See more of this</MenuItem>
				<MenuItem onClick={handleSavePost}>
					{savePost.isLoading ? "Saving" : "Save Post"}
				</MenuItem>
				<MenuItem onClick={handleBlockUser}>Block User</MenuItem>
			</Menu>

			<div>
				<Modal keepMounted open={isOpen} onClose={handleCloseModal}>
					<Box className="block-user-modal">
						<p>You'll no longer see their posts and interactions</p>
						<p>Are you sure you want to block this user ?</p>
						<Box className="block-user-modal-btns">
							<button onClick={handleCloseModal}>Cancel</button>
							<button onClick={handleCloseModal}>Block user</button>
						</Box>
					</Box>
				</Modal>
			</div>
			<div>
				<Modal
					keepMounted
					open={isPromoteOpen}
					onClose={handleClosePromoteModal}
				>
					<Box className="promote-post-modal">
						<div className="promote-post-cancel">
							<RxCross2
								size={22}
								onClick={handleClosePromoteModal}
								cursor={"pointer"}
							/>
						</div>
						<img src={PromoteIllustration} alt="promote-illustration" />
						<h3>Amplify Your Reach!</h3>
						<p>
							Promote your post and expand your reach effortlessly <br />
							with our powerful promotion tool
						</p>
						<Box className="promote-plan-options">
							<h4>Select a plan</h4>
							<Box className="promote-plan-grid">
								<label
									htmlFor="basic-plan"
									className={`plan-card ${setActive(plan.title === "basic")}`}
									onClick={() => setPlan({ id: 1, title: "basic" })}
								>
									<p>Basic</p>
									<span>N 1,000</span>
									<p>1 day</p>
									<input
										type="radio"
										id="basic-plan"
										name="plan"
										checked={plan.title === "basic"}
									/>
								</label>
								<label
									htmlFor="standard-plan"
									className={`plan-card ${setActive(
										plan.title === "standard"
									)}`}
									onClick={() => setPlan({ id: 2, title: "standard" })}
								>
									<p>Standard</p>
									<span>N 5,000</span>
									<p>7 days</p>
									<input
										type="radio"
										id="standard-plan"
										name="plan"
										checked={plan.title === "standard"}
									/>
								</label>
								<label
									htmlFor="premium-plan"
									className={`plan-card ${setActive(plan.title === "premium")}`}
									onClick={() => setPlan({ id: 3, title: "premium" })}
								>
									<p>Premium</p>
									<span>N 9,000</span>
									<p>14 days</p>
									<input
										type="radio"
										id="premium-plan"
										name="plan"
										checked={plan.title === "premium"}
									/>
								</label>
								<label
									htmlFor="pro-plan"
									className={`plan-card ${setActive(plan.title === "pro")}`}
									onClick={() => setPlan({ id: 4, title: "pro" })}
								>
									<p>Pro</p>
									<span>N 24,000</span>
									<p>30 days</p>
									<input
										type="radio"
										id="pro-plan"
										name="plan"
										checked={plan.title === "pro"}
									/>
								</label>
							</Box>
						</Box>
						<Custombutton
							onClick={handlePromotePost}
							name={promotePost.isLoading ? "Promoting..." : "Promote"}
							className={"promote-plan-btn"}
							type={"button"}
							disabled={promotePost.isLoading}
						/>
					</Box>
				</Modal>
			</div>
			<div>
				<Modal keepMounted open={isReport} onClose={handleCloseModal}>
					<Box className="report-user-modal">
						<div className="flex items-center justify-between mb-2">
							<p className="text-xl text-bold text-black">Report Abuse</p>
							<RxCross2
								size={22}
								onClick={handleCloseReportModal}
								cursor={"pointer"}
							/>
						</div>
						<p>
							Your opinion means a lot to us as a team so as to create a safe
							community for everyone
						</p>
						<form>
							<label htmlFor="report">
								<textarea
									name="report"
									id="report"
									cols="30"
									rows="10"
									placeholder="Write up to 1,000 words"
									className="resize-none w-full"
									onChange={(e) => setReportText(e.target.value)}
									required
								/>
							</label>
							<Custombutton
								onClick={handleReport}
								name={"Send report"}
								className={"report-btn"}
								type={"submit"}
								disabled={reportPost.isLoading}
							/>
						</form>
					</Box>
				</Modal>
			</div>
		</div>
	);
};

export default PostMenu;
