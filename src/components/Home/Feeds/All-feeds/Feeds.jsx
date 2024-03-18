import React, { useEffect, useContext } from "react";
import MusicDash from "components/Dashboard/MusicDas";
import PostComp from "components/Dashboard/PostComp";
import ProductDash from "components/Dashboard/product-card/ProductDAs";
import SmallTicketPromoteCard from "components/Dashboard/smallTicketsPromoted";
import MovieSlider from "components/Home/Movieslider/MovieSlider";
import Stick from "components/Dashboard/Stick";
import PostImage from "assets/images/sample-post-image.png";
import MovieDashCard from "components/Home/Movieslider/MovieCards";
import { useGetAllFeeds } from "api/hooks/feeds";
import { ModalContext } from "Context/ModalContext";
import FeedsSkeleton from "components/Home/Skeleton/FeedsSkeleton";

const Feeds = () => {
    const { isAuthenticated } = useContext(ModalContext);
	const { data, isLoading, isError } = useGetAllFeeds(isAuthenticated);

	if (!isLoading && !isError && !data && isAuthenticated) {
		return <h3>No feeds available</h3>;
	}
	// if(!data || data?.length === 0) {
	//     return (
	//         <h3>No feeds available</h3>
	//     )
	// }

    if (isLoading) {
        return (
            <FeedsSkeleton />
        )
    }
    if (isAuthenticated && isError) {
			return <h3>unable to get feeds at this time, 
                please check your network and try again in some minutes</h3>;
		}

	return (
		<div style={{ maxWidth: "560px" }}>
			{data?.posts?.length > 0 && (
				<PostComp
					postData={
						data?.posts?.[0]?.is_repost
							? data?.posts?.[0]?.repost
							: data?.posts?.[0]
					}
					shared={data?.posts?.[0]?.is_repost}
				/>
			)}

			{data?.posts?.length > 1 && (
				<>
					<div className="music-das-row">
						{[1, 2, 3, 4, 5, 6, 7].map((item) => (
							<MusicDash key={item} />
						))}
					</div>

					<PostComp
						postData={
							data?.posts?.[1]?.is_repost
								? data?.posts?.[1]?.repost
								: data?.posts?.[1]
						}
						shared={data?.posts?.[1]?.is_repost}
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
						postData={
							data?.posts?.[2]?.is_repost
								? data?.posts?.[2]?.repost
								: data?.posts?.[2]
						}
						shared={data?.posts?.[2]?.is_repost}
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
						postData={
							data?.posts?.[3]?.is_repost
								? data?.posts?.[3]?.repost
								: data?.posts?.[3]
						}
						shared={data?.posts?.[3]?.is_repost}
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
						postData={
							data?.posts?.[4]?.is_repost
								? data?.posts?.[4]?.repost
								: data?.posts?.[4]
						}
						shared={data?.posts?.[4]?.is_repost}
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
					postData={post?.is_repost ? post?.repost : post}
					shared={post.is_repost}
				/>
			))}
		</div>
	);
};

export default Feeds;
