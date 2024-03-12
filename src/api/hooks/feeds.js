/***********************************************************************
 * Hooks are detailed below in the order: create, update, fetch, delete
 *************************************************************************/
import { useMutation, useQuery } from "@tanstack/react-query";
import {
	createComment,
	createFeedsPost,
	createPostFile,
	createReaction,
	createReply,
	feedsRepost,
	getAllFeedsPost,
	getPostById,
	getTotalReactions,
    savePost,
} from "api/services/feeds";

const feedsKey = "feed";
const reactionKey = "reaction";

/**CREATE FEEDS DATA HOOKS */

export const useCreateFeedsPost = (options) => {
	const mutation = useMutation({
		mutationFn: (postData) => createFeedsPost(postData),
		onSuccess: (data) => {
			options.onSuccess && options.onSuccess(data);
		},
		onError: (error) => {
			options.onError && options.onError(error);
		},
	});

	return {
		createPost: mutation.mutate,
		isSuccess: mutation.isSuccess,
		isError: mutation.isError,
		isLoading: mutation.isPending,
	};
};

export const useCreatePostFile = (options) => {
	const mutation = useMutation({
		mutationFn: (postId) => createPostFile(postId, options.postFileData),
		onSuccess: (data) => {
			options.onSuccess && options.onSuccess(data);
		},
		onError: (error) => {
			options.onError && options.onError(error);
		},
	});

	return {
		postFile: mutation.mutate,
		isSuccess: mutation.isSuccess,
		isError: mutation.isError,
		isLoading: mutation.isPending,
	};
};

export const useCreateComment = (options) => {
	const mutation = useMutation({
		mutationFn: (commentData) => createComment(options.postId, commentData),
		onSuccess: (data) => {
			options.onSuccess && options.onSuccess(data);
		},
		onError: (error) => {
			options.onError && options.onError(error);
		},
	});

	return {
		comment: mutation.mutate,
		isSuccess: mutation.isSuccess,
		isError: mutation.isError,
		isLoading: mutation.isPending,
	};
};

export const useCreateReply = (options) => {
	const mutation = useMutation({
		mutationFn: (replyData) => createReply(options.postId, options.commentId, replyData),
		onSuccess: (data) => {
			options.onSuccess && options.onSuccess(data);
		},
		onError: (error) => {
			options.onError && options.onError(error);
		},
	});

	return {
		comment: mutation.mutate,
		isSuccess: mutation.isSuccess,
		isError: mutation.isError,
		isLoading: mutation.isPending,
	};
};

export const useFeedsRepost = (options) => {
	const mutation = useMutation({
		mutationFn: (postData) => feedsRepost(options.postId, postData),
		onSuccess: (data) => {
			options.onSuccess && options.onSuccess(data);
		},
		onError: (error) => {
			options.onError && options.onError(error);
		},
	});

	return {
		repost: mutation.mutate,
		isSuccess: mutation.isSuccess,
		isError: mutation.isError,
		isLoading: mutation.isPending,
	};
};

export const useSavePost = (options) => {
	const mutation = useMutation({
		mutationFn: (postId) => savePost(postId),
		onSuccess: (data) => {
			options.onSuccess && options.onSuccess(data);
		},
		onError: (error) => {
			options.onError && options.onError(error);
		},
	});

	return {
		savePost: mutation.mutate,
		isSuccess: mutation.isSuccess,
		isError: mutation.isError,
		isLoading: mutation.isPending,
	};
};

/**CREATE FEEDS REACTION HOOKS */

export const useCreateReaction = (options) => {
	const mutation = useMutation({
		mutationFn: (reactionData) => createReaction(options.postId, reactionData),
		onSuccess: (data) => {
			options.onSuccess && options.onSuccess(data);
		},
		onError: (error) => {
			options.onError && options.onError(error);
		},
	});

	return {
		reaction: mutation.mutate,
		isSuccess: mutation.isSuccess,
		isError: mutation.isError,
		isLoading: mutation.isPending,
	};
};

/**UPDATE FEEDS DATA HOOKS */
//none here at the moment

/**FETCH FEEDS DATA HOOKS */

export const useGetAllFeeds = () => {
	const response = useQuery({
		queryKey: [feedsKey],
		queryFn: () => getAllFeedsPost(),
	});

	return {
		isError: response.isError,
		isLoading: response.isLoading,
		isSuccess: response.isSuccess,
		data: response.data ? response.data?.data : undefined,
	};
};

export const useGetPostById = (postId) => {
	const response = useQuery({
		queryKey: [feedsKey, postId],
		queryFn: () => getPostById(postId),
		enabled: postId !== undefined,
	});

	return {
		isSuccess: response.isSuccess,
		isError: response.isError,
		isLoading: response.isLoading,
		data: response.data ? response.data?.data?.post : undefined,
	};
};

export const useGetTotalReactions = (postId) => {
	const response = useQuery({
		queryKey: [reactionKey, postId],
		queryFn: () => getTotalReactions(postId),
	});

	return {
		isError: response.isError,
		isLoading: response.isLoading,
		isSuccess: response.isSuccess,
		data: response.data ? response.data?.data : undefined,
	};
};

/**DELETE FEEDS DATA HOOKS */
//none here at the moment
