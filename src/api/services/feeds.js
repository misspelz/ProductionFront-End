/*******************************************************************************
 * Api services are detailed below in the order: Post, Put/Patch, Get, Delete
 *******************************************************************************/
import _2gedaservice from "..";

const { post, get } = _2gedaservice;

/**POST HTTP REQUESTS*/
export const createFeedsPost = async (postData) => {
	const response = post(`/feed/post/`, postData);
	return (await response).data;
};

export const createComment = async (postId, commentData) => {
	const response = post(`/feed/post/${postId}/comment/`, commentData);
	return (await response).data;
};


export const createReply = async (replyData) => {
	const response = post(`/feed/reply/`, replyData);
	return (await response).data;
};

export const feedsRepost = async (postData) => {
	const response = post(`/feed/repost/`, postData);
	return (await response).data;
};

/**PUT/PATCH HTTP REQUESTS*/
//none here at the moment

/**GET HTTP REQUESTS*/

export const getAllFeedsPost = async () => {
	const response = get(`/feed/post/`);
	return (await response).data;
};

export const getPostById = async (id) => {
	const response = get(`/feed/post/${id}`);
	return (await response).data;
};

/**DELETE HTTP REQUESTS*/
//none here at the moment
