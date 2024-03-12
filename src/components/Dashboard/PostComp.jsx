import { BiSolidLike, BiMessageAlt } from "react-icons/bi";
import Comment from "./Comment";
import PostMenu from "../Modals/post-menu/PostMenu";
import { useState } from "react";
import PostmediaGrid from "./post-media-grid/PostmediaGrid";
import Sharepost from "components/Home/Sharepost/Sharepost";
import Likepost from "components/Home/Likepost/Likepost";
import { Link } from "react-router-dom";
import BlankProfile from "assets/images/blank-profile-image.png";
import { useGetTotalReactions } from "api/hooks/feeds";

const PostComp = ({
	index,
	disnone,
	redmar,
	creator,
	comment,
	media,
	hashtag,
	content,
	reaction,
	shared,
	post_reaction_count,
	post_comment_count,
	time_since,
    postData,
	postID,
}) => {
	const { data } = useGetTotalReactions(postID);
    const totalReactions = data ? Object
			.values(data?.reactions)
			?.reduce((acc, cur) => acc + cur) : 0
	const [commentList, setCommentList] = useState([]);
	const convertPostTime = (timeStamp) => {
		let renderedTime = "";
		const dateCreated = new Date(timeStamp);
		const currentDate = new Date();
		const timeDifference = currentDate.getTime() - dateCreated.getTime();

		// Convert milliseconds to seconds
		const secondsPassed = Math.floor(timeDifference / 1000);
		if (secondsPassed < 60) {
			renderedTime = `${secondsPassed} secs ago`;
		} else if (secondsPassed < 3600) {
			renderedTime = `${Math.floor(secondsPassed / 60)} mins ago`;
		} else if (secondsPassed < 86400) {
			renderedTime = `${Math.floor(secondsPassed / 3600)} hrs ago`;
		} else {
			renderedTime = `${Math.floor(secondsPassed / 86400)} days ago`;
		}

		return renderedTime;
	};

	return (
		<div className={`postcom ${redmar}`}>
			{shared && (
				<div className="flex items-center justify-between bg-[#4f0da3] py-2 px-4 rounded-t-full">
					<p className="m-0 text-[#fff]">
						Joseph Dimeji <span className="text-[#aa71f4] ml-1"> shared</span>
					</p>
					<span className="text-[#aa71f4]">2m ago</span>
				</div>
			)}
			<div className="post-comp-container">
				<div className="profile-time">
					<div className="post-profile" style={{}}>
						{creator && (
							<img src={creator.cover_image ?? BlankProfile} alt="" />
						)}
						<div className="post-profile-details">
							{creator && creator.username && (
								<div className="post-profile-name">{creator.username}</div>
							)}

							{creator && creator.username && (
								<div className="autor-ooby">Pharmacist</div>
							)}

							{creator && creator.address && (
								<div className="autor-location">
									{creator.address.current_city},{creator.address.country}
								</div>
							)}
						</div>
					</div>
					{time_since && (
						<div className="time-posted">{convertPostTime(time_since)}</div>
					)}
				</div>
				<hr className="feed-hr" />
				<Link to={`/Home/${postID}`} className="post-body-box">
					<div>
						{content && (
							<div className="post-body-text">
								{content}
								<br />
								<br />
							</div>
						)}
					</div>
				</Link>
				<Link to={`/Home/${postID}`}>
					<div>{media && <PostmediaGrid media={media} />}</div>
				</Link>
				<div className="post-likes-co">
					<div className="likes-per-post">
						<div className="likes-bx">
							<BiSolidLike className="likes" />
						</div>
						<div className="smil">🥰</div>
						<div className="smil">&#x1F60A;</div>
					</div>
					<div className="liker-name-and-total">
						{totalReactions}
						{/* {reaction && reaction.length > 3
							? `${reaction[0].user.username} and ${post_reaction_count - 1}`
							: post_reaction_count} */}
					</div>
				</div>
				<div className="post-likes-box">
					<div className="posted-likes-cont">
						<div className="icon-text">
							<Likepost postId={postID} />
							<span className="text-[12px]">{reaction?.like_count}</span>
						</div>
						<div className="icon-text">
							<BiMessageAlt size={22} color="#000000b9" />
							<span className="text-[12px]">{post_comment_count ?? 0}</span>
						</div>

						<div className="icon-text">
							<Sharepost postId={postID} postData={postData} />
						</div>
					</div>
					<PostMenu postId={postID} />
				</div>
			</div>
			<Comment
				index={index}
				setCommentList={setCommentList}
				commentList={commentList}
				disnone={disnone}
				postID={postID}
			/>
		</div>
	);
};

export default PostComp;
