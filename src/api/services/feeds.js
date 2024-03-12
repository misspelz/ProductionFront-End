/*******************************************************************************
 * Api services are detailed below in the order: Post, Put/Patch, Get, Delete
 *******************************************************************************/
import _2gedaservice from "..";

const { post, get } = _2gedaservice;

const config = {
	headers: {
		"Content-Type": "multipart/form-data",
	},
};

/**POST HTTP REQUESTS*/
export const createFeedsPost = async (postData) => {
	const response = post(`/feeds/post/`, postData);
	return (await response).data;
};

export const createPostFile = async (postId, postFileData) => {
	console.log("postFileData from services", postFileData);
	const response = post(`/feeds/post/${postId}/file/`, postFileData, config);
	return (await response).data;
};

export const createComment = async (postId, commentData) => {
	const response = post(`/feeds/post/${postId}/comments/`, commentData);
	return (await response).data;
};

export const createReply = async (postId, commentId, replyData) => {
	const response = post(
		`/feeds/post/${postId}/comments/${commentId}/replies/`,
		replyData
	);
	return (await response).data;
};

export const feedsRepost = async (postId, postData) => {
	const response = post(`/feeds/post/${postId}/repost/`, postData);
	return (await response).data;
    
};

export const savePost = async (postId) => {
	const response = post(`/feeds/post/${postId}/save/`);
	return (await response).data;
    
};

export const createReaction = async (postId, reactionData) => {
	const response = post(`/feeds/post/${postId}/reactions/`, reactionData);
	return (await response).data;
};

/**PUT/PATCH HTTP REQUESTS*/
//none here at the moment

/**GET HTTP REQUESTS*/

export const getAllFeedsPost = async () => {
	const response = get(`/feeds/post/`);
	return (await response).data;
};

export const getPostById = async (id) => {
	const response = get(`/feeds/post/${id}`);
	return (await response).data;
};

export const getTotalReactions = async (postId) => {
	const response = get(`/feeds/post/${postId}/reactions/`);
	return (await response).data;
};

export const getCommentReplies = async (postId, commentId) => {
	const response = get(`/feeds/post/${postId}/comments/${commentId}/replies/`);
	return (await response).data;
};

// feeds/post/1/comments/1/replies/

/**DELETE HTTP REQUESTS*/
//none here at the moment
