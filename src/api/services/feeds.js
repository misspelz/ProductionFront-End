/*******************************************************************************
 * Api services are detailed below in the order: Post, Put/Patch, Get, Delete
 *******************************************************************************/
import _2gedaservice, { setupAxios } from "..";

const { post, get} = _2gedaservice;

const config = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

/**POST HTTP REQUESTS*/
export const createFeedsPost = async (postData) => {
	setupAxios();
	const response = post(`/feeds/post/`, postData);
	return (await response).data;
};

export const createPostFile = async (postId, postFileData) => {
	setupAxios();
	const response = post(`/feeds/post/${postId}/file/`, postFileData, config);
	return (await response).data;
};

export const createComment = async (postId, commentData) => {
	setupAxios();
	const response = post(`/feeds/post/${postId}/comments/`, commentData, config);
	return (await response).data;
};

export const createReply = async (postId, commentId, replyData) => {
	setupAxios();
	const response = post(
		`/feeds/post/${postId}/comments/${commentId}/replies/`,
		replyData
	);
	return (await response).data;
};

export const feedsRepost = async (postId, postData) => {
	setupAxios();
	const response = post(`/feeds/post/${postId}/repost/`, postData);
	return (await response).data;
};

export const savePost = async (postId) => {
	setupAxios();
	const response = post(`/feeds/post/${postId}/save/`);
	return (await response).data;
};

export const promotePost = async (promoteData) => {
	setupAxios();
	const response = post(`/feeds/post/promote/`, promoteData);
	return (await response).data;
};

export const reportPost = async (reportData) => {
	setupAxios();
	const response = post(`/feeds/post/report/`, reportData);
	return (await response).data;
};

export const createReaction = async (postId, reactionData) => {
	setupAxios();
	const response = post(`/feeds/post/${postId}/reactions/`, reactionData);
	return (await response).data;
};

export const createCommentReaction = async (
	postId,
	commentId,
	reactionData
) => {
	setupAxios();
	const response = post(
		`/feeds/post/${postId}/comments/${commentId}/reactions/`,
		reactionData
	);
	return (await response).data;
};

export const createReplyReaction = async (
	postId,
	commentId,
	replyId,
	reactionData
) => {
	setupAxios();
	const response = post(
		`/feeds/post/${postId}/comments/${commentId}/replies/${replyId}/reactions/`,
		reactionData
	);
	return (await response).data;
};

export const createStatus = async (statusData) => {
	setupAxios();
	const response = post(`/feeds/status/`, statusData);
	return (await response).data;
};

export const blockUser = async (data) => {
	setupAxios();
	const response = post(`/user/account/block_user/`, data);
	return (await response).data;
};

/**PUT/PATCH HTTP REQUESTS*/
//none here at the moment

/**GET HTTP REQUESTS*/

export const getAllFeedsPost = async () => {
	setupAxios();
	const response = get(`/feeds/post/`);
	return (await response).data;
};

export const getPostById = async (id) => {
	setupAxios();
	const response = get(`/feeds/post/${id}`);
	return (await response).data;
};

export const getTotalReactions = async (postId) => {
	setupAxios();
	const response = get(`/feeds/post/${postId}/reactions/`);
	return (await response).data;
};

export const getTotalCommentReactions = async (postId, commentId) => {
	setupAxios();
	const response = get(
		`/feeds/post/${postId}/comments/${commentId}/reactions/`
	);
	return (await response).data;
};

export const getReplyReactions = async (postId, commentId, replyId) => {
	setupAxios();
	const response = get(
		`/feeds/post/${postId}/comments/${commentId}/replies/${replyId}/reactions/`
	);
	return (await response).data;
};

export const getComments = async (postId) => {
	setupAxios();
	const response = get(`/feeds/post/${postId}/comments/`);
	return (await response).data;
};

export const getCommentReplies = async (postId, commentId) => {
	setupAxios();
	const response = get(`/feeds/post/${postId}/comments/${commentId}/replies/`);
	return (await response).data;
};

export const getGoogleLocation = async (latitude, longitude) => {
	const response = fetch(
		`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=false&key=AIzaSyBFU5z4QfEvabpt01y8UvzUBJBCJt0nxg0`
	).then((res) => res.json());
	return await response;
};

export const getAllUsers = async () => {
	setupAxios();
	const response = get(`/account/profiles/`);
	return (await response).data;
};

export const getAllStereoFiles = async (postId, commentId) => {
	setupAxios();
	const response = get(`/feeds/post/${postId}/comments/${commentId}/replies/`);
	return (await response).data;
};

/**DELETE HTTP REQUESTS*/
//none here at the moment

export const removeReaction = async (postId, reactionData) => {
    console.log(reactionData);
	setupAxios();
	const response = _2gedaservice.delete(
		`/feeds/post/${postId}/reactions/`,
		reactionData
	);
	return (await response).data;
};

export const removeCommentReaction = async (
	postId,
	commentId,
	reactionData
) => {
	setupAxios();
	const response = _2gedaservice.delete(
		`/feeds/post/${postId}/comments/${commentId}/reactions/`,
		reactionData
	);
	return (await response).data;
};

export const removeReplyReaction = async (
	postId,
	commentId,
	replyId,
	reactionData
) => {
	setupAxios();
	const response = _2gedaservice.delete(
		`/feeds/post/${postId}/comments/${commentId}/replies/${replyId}/reactions/`,
		reactionData
	);
	return (await response).data;
};
