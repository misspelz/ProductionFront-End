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
import { convertPostTime } from "utils/helper";

const PostComp = ({
	shared,
    postData
}) => {
	const { data } = useGetTotalReactions(postData?.id);
    const totalReactions = data ? Object
			.values(data?.reactions)
			?.reduce((acc, cur) => acc + cur) : 0
	const [commentList, setCommentList] = useState([]);

	return (
		<div className={`postcom`}>
			{shared && (
				<div className="flex items-center justify-between bg-[#4f0da3] py-2 px-4 rounded-t-full">
					<p className="m-0 text-[#fff]">
						{postData?.user?.username}{" "}
						<span className="text-[#aa71f4] ml-1"> shared</span>
					</p>
					<span className="text-[#aa71f4]">
						{convertPostTime(postData?.created_at)}
					</span>
				</div>
			)}
			<div className="post-comp-container">
				<div className="profile-time">
					<div className="post-profile">
						{postData?.user && (
							<img src={postData?.user.cover_image ?? BlankProfile} alt="" />
						)}
						<div className="post-profile-details">
							{postData?.user && postData?.user?.username && (
								<div className="post-profile-name">
									{postData?.user.username}
								</div>
							)}

							{/* {creator && creator.username && (
								<div className="autor-ooby">Pharmacist</div>
							)} */}

							{/* {creator && creator.address && (
								<div className="autor-location">
									{creator.address.current_city},{creator.address.country}
								</div>
							)} */}
						</div>
					</div>
					{postData && (
						<div className="time-posted">
							{convertPostTime(postData?.created_at)}
						</div>
					)}
				</div>
				<hr className="feed-hr" />
				<Link to={`/Home/${postData?.id}`} className="post-body-box">
					<div>
						{postData?.text_content && (
							<div className="post-body-text">
								{postData?.text_content}
								<br />
								<br />
							</div>
						)}
					</div>
				</Link>
				<Link to={`/Home/${postData?.id}`}>
					<div>
						{postData?.files && <PostmediaGrid media={postData?.files} />}
					</div>
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
							<Likepost postId={postData?.id} />
							<span className="text-[12px]">
								{postData?.reaction?.like_count}
							</span>
						</div>
						<div className="icon-text">
							<BiMessageAlt size={22} color="#000000b9" />
							<span className="text-[12px]">{0}</span>
						</div>

						<div className="icon-text">
							<Sharepost postId={postData?.id} postData={postData} />
						</div>
					</div>
					<PostMenu postId={postData?.id} />
				</div>
			</div>
			<Comment
				setCommentList={setCommentList}
				commentList={commentList}
				postID={postData?.id}
			/>
		</div>
	);
};

export default PostComp;
