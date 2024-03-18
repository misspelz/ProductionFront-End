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
	const response = post(`/feeds/post/${postId}/file/`, postFileData, config);
	return (await response).data;
};

export const createComment = async (postId, commentData) => {
	const response = post(`/feeds/post/${postId}/comments/`, commentData, config);
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

export const promotePost = async (promoteData) => {
	const response = post(`/feeds/post/promote/`, promoteData);
	return (await response).data;
};

export const reportPost = async (reportData) => {
	const response = post(`/feeds/post/report/`, reportData);
	return (await response).data;
};

export const createReaction = async (postId, reactionData) => {
	const response = post(`/feeds/post/${postId}/reactions/`, reactionData);
	return (await response).data;
};

export const createCommentReaction = async (postId, commentId, reactionData) => {
	const response = post(`/feeds/post/${postId}/comments/${commentId}/reactions/`, reactionData);
	return (await response).data;
};

export const createReplyReaction = async (postId, commentId, replyId, reactionData) => {
	const response = post(`/feeds/post/${postId}/comments/${commentId}/replies/${replyId}/reactions/`, reactionData);
	return (await response).data;
};

export const createStatus = async (statusData) => {
	const response = post(`/feeds/status/`, statusData);
	return (await response).data;
};

export const blockUser = async (data) => {
	const response = post(`/user/account/block_user/`, data);
	return (await response).data;
};

// /user/account/block_user/

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

export const getTotalCommentReactions = async (postId, commentId) => {
	const response = get(`/feeds/post/${postId}/comments/${commentId}/reactions/`);
	return (await response).data;
};

export const getReplyReactions = async (postId, commentId, replyId) => {
	const response = get(`/feeds/post/${postId}/comments/${commentId}/replies/${replyId}/reactions/`);
	return (await response).data;
};

export const getComments = async (postId) => {
	const response = get(`/feeds/post/${postId}/comments/`);
	return (await response).data;
};

export const getCommentReplies = async (postId, commentId) => {
	const response = get(`/feeds/post/${postId}/comments/${commentId}/replies/`);
	return (await response).data;
};

/**DELETE HTTP REQUESTS*/
//none here at the moment
