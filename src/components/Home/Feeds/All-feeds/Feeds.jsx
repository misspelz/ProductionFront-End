import React, { useEffect } from "react";
import MusicDash from "components/Dashboard/MusicDas";
import PostComp from "components/Dashboard/PostComp";
import ProductDash from "components/Dashboard/product-card/ProductDAs";
import SmallTicketPromoteCard from "components/Dashboard/smallTicketsPromoted";
import MovieSlider from "components/Home/Movieslider/MovieSlider";
import Stick from "components/Dashboard/Stick";
import PostImage from "assets/images/sample-post-image.png";
import PostAvatar from "assets/images/sample-avatar.png";
import MovieDashCard from "components/Home/Movieslider/MovieCards";
import { useGetAllFeeds } from "api/hooks/feeds";
import { setupAxios } from "api/index";

const Feeds = () => {
	const { data, isLoading, isError } = useGetAllFeeds();
    console.log("feeds data", data)

    useEffect(() => {setupAxios()}, []);

	if (!isLoading && !isError && !data) {
		return <h3>No feeds available</h3>;
	}
	// if(!data || data?.length === 0) {
	//     return (
	//         <h3>No feeds available</h3>
	//     )
	// }

	return (
		<div style={{ maxWidth: "560px" }}>
			<PostComp
				postID={data?.posts?.[0]?.id}
				creator={data?.posts?.[0]?.user}
				comment={"some random comment"}
				media={data?.posts?.[0]?.files}
				hashtag={"hashtag"}
				content={data?.posts?.[0]?.text_content}
				reaction={data?.posts?.[0]?.reaction}
				post_comment_count={4}
				postData={data?.posts?.[0]}
				time_since={data?.posts?.[0]?.created_at}
			/>

			{data?.posts?.length > 1 && (
				<>
					<div className="music-das-row">
						{[1, 2, 3, 4, 5, 6, 7].map((item) => (
							<MusicDash key={item} />
						))}
					</div>

					<PostComp
						postID={data?.posts?.[1]?.id}
						creator={data?.posts?.[1]?.user}
						comment={"some random comment"}
						media={data?.posts?.[1]?.files}
						hashtag={"hashtag"}
						content={data?.posts?.[1]?.text_content}
						reaction={data?.posts?.[1]?.reaction}
						post_comment_count={4}
						postData={data?.posts?.[1]}
						time_since={data?.posts?.[1]?.created_at}
					/>
				</>
			)}

			{data?.posts?.length > 2 && (
				<>
					<div className="ticket-das-row">
						{[1, 2, 3, 4, 5, 6, 7].map((item) => (
							<SmallTicketPromoteCard
								key={item}
								description={"Lagos festival"}
								eventId={"id123"}
								formatedDate={"Feb 24 2024"}
								location={"Ikeja city mall"}
								eventImage={PostImage}
							/>
						))}
					</div>
					<PostComp
						postID={data?.posts?.[2]?.id}
						creator={data?.posts?.[2]?.user}
						comment={"some random comment"}
						media={data?.posts?.[2]?.files}
						hashtag={"hashtag"}
						content={data?.posts?.[2]?.text_content}
						reaction={data?.posts?.[2]?.reaction}
						post_comment_count={4}
						postData={data?.posts?.[2]}
						time_since={data?.posts?.[2]?.created_at}
						shared
					/>
				</>
			)}

			{data?.posts?.length > 3 && (
				<>
					<div className="ticket-das-row">
						{[1, 2, 3, 4, 5, 6, 7].map((item) => (
							<MovieDashCard key={item} />
						))}
					</div>
					<PostComp
						postID={data?.posts?.[3]?.id}
						creator={data?.posts?.[3]?.user}
						comment={"some random comment"}
						media={data?.posts?.[3]?.files}
						hashtag={"hashtag"}
						content={data?.posts?.[3]?.text_content}
						reaction={data?.posts?.[3]?.reaction}
						post_comment_count={4}
						postData={data?.posts?.[3]}
						time_since={data?.posts?.[3]?.created_at}
					/>
				</>
			)}

			{data?.posts?.length > 4 && (
				<>
					<div className="ticket-das-row">
						{[1, 2, 3, 4, 5, 6, 7].map((item) => (
							<ProductDash key={item} />
						))}
					</div>
					<PostComp
						postID={data?.posts?.[4]?.id}
						creator={data?.posts?.[4]?.user}
						comment={"some random comment"}
						media={data?.posts?.[4]?.files}
						hashtag={"hashtag"}
						content={data?.posts?.[4]?.text_content}
						reaction={data?.posts?.[4]?.reaction}
						post_comment_count={4}
						postData={data?.posts?.[4]}
						time_since={data?.posts?.[4]?.created_at}
					/>
				</>
			)}

			{data?.posts?.length > 5 && (
				<div className="movie-slid-box">
					<div className="post-ead">Trending movies</div>
					<MovieSlider />
				</div>
			)}

			<div className="you-may-know">
				<div className="post-ead">People you may know</div>
				<div className="may-know-box">
					{[1, 2, 3, 4, 5, 6, 7].map((item) => (
						<Stick key={item} />
					))}
				</div>
			</div>

			{data?.posts?.slice(5)?.map((post) => (
				<PostComp
					key={post?.id}
					postID={post?.id}
					creator={post?.user}
					comment={"some random comment"}
					media={post?.files}
					hashtag={"hashtag"}
					content={post?.text_content}
					reaction={post?.reaction}
					post_comment_count={4}
					postData={post}
					time_since={post?.created_at}
				/>
			))}
		</div>
	);
};

export default Feeds;
