import { BiLike } from "react-icons/bi";
import { convertPostTime } from "utils/helper";

const ReplyComp = ({reply}) => {
  return (
		<div className="reply-container">
			{" "}
			<div className="profile-time">
				<div className="post-profile comment-pro">
					<img
						src="https://image.cnbcfm.com/api/v1/image/107228941-1682027700192-_DSC5658.jpg?v=1682427601&w=1920&h=1080"
						alt=""
					/>
					<div className="post-profile-details">
						<div className="post-profile-name nmm">{reply?.user?.username}</div>
						{/* <div className="autor-ooby nmm">Software Engineer</div> */}
					</div>
				</div>
				<div className="time-posted nmm">
					{convertPostTime(reply?.created_at)}
				</div>
			</div>
			<div className="post-body-box">
				<div className="comm-body-text btxt">{reply?.text_content}</div>
			</div>
			<div className="post-likes-box">
				<div className="posted-likes-cont">
					<div className="icon-text">
						<BiLike className="like" />
						<div className="con-test">{reply?.reactions?.like_count}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReplyComp;
