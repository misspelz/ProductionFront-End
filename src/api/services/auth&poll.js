import axios from "axios";
import { url } from "utils/index";

export const getToken = () => {
  const token = localStorage.getItem("authTOken");
  return token;
};

export const getLoginToken = () => {
  const token = localStorage.getItem("authToken");
  return token;
};

/**
 * Auth Screens
 */

export const Register = async (payload) => {
  const res = await axios.post(`${url}/api/user/auth/register/`, {
    ...payload,
  });
  return res;
};

export const Login = async (payload) => {
  const res = await axios.post(`${url}/api/user/auth/login/`, { ...payload });
  return res;
};

export const UserInfoApi = async (userToken) => {
  const res = await axios.get(`${url}/api/user/account/profile/retrieve/`, {
    headers: {
      Authorization: `Token ${userToken || getToken()}`,
    },
  });
  return res;
};

export const ReSendOTP = async (verificationType) => {
  const res = await axios.get(
    `${url}/api/user/auth/resend-otp/?verification_type=${verificationType}`,
    {
      headers: {
        Authorization: `Token ${getToken()}`,
      },
    }
  );
  return res;
};

export const VerifyOTP = async (data) => {
  const res = await axios.post(
    `${url}/api/user/auth/verify-account/`,
    { ...data },
    {
      headers: {
        Authorization: `Token ${getToken()}`,
      },
    }
  );
  return res;
};

export const ResetPassword = async (data) => {
  const res = await axios.post(
    `${url}/api/user/auth/reset-password/`,
    { ...data },
    {
      headers: {
        Authorization: `Token ${getToken()}`,
      },
    }
  );
  return res;
};

export const ForgotPassword = async (data) => {
  const res = await axios.post(
    `${url}/api/user/auth/forgot-password/`,
    { ...data },
    {
      headers: {
        Authorization: `Token ${getToken()}`,
      },
    }
  );
  return res;
};

/**
 * Polls/Voting
 */

export const CreatePollApi = async (pollData) => {
  const res = await axios.post(
    `${url}/api/polls/user/`,
    { ...pollData },
    {
      headers: {
        Authorization: `Token ${getLoginToken()}`,
      },
    }
  );
  return res;
};

export const UpdatePollApi = async (pollData, pollID) => {
  const res = await axios.put(
    `${url}/api/polls/user/${pollID}/`,
    { ...pollData },
    {
      headers: {
        Authorization: `Token ${getLoginToken()}`,
      },
    }
  );
  return res;
};

export const DeletePollApi = async (pollID) => {
  const res = await axios.delete(`${url}/api/polls/user/${pollID}/`, {
    headers: {
      Authorization: `Token ${getLoginToken()}`,
    },
  });
  return res;
};

export const PollsApi = async () => {
  const res = await axios.get(`${url}/api/polls/`, {
    headers: {
      Authorization: `Token ${getLoginToken()}`,
    },
  });
  return res;
};

export const MyPollsApi = async () => {
  const res = await axios.get(`${url}/api/polls/user/`, {
    headers: {
      Authorization: `Token ${getLoginToken()}`,
    },
  });
  return res;
};

export const SuggestedPollsApi = async () => {
  const res = await axios.get(`${url}/api/polls/suggested/`, {
    headers: {
      Authorization: `Token ${getLoginToken()}`,
    },
  });
  return res;
};

export const PromotedPollsApi = async () => {
  const res = await axios.get(`${url}/api/polls/promoted/`, {
    headers: {
      Authorization: `Token ${getLoginToken()}`,
    },
  });
  return res;
};

export const ActivePollsApi = async () => {
  const res = await axios.get(`${url}/api/polls/user/active/`, {
    headers: {
      Authorization: `Token ${getLoginToken()}`,
    },
  });
  return res;
};

export const EndedPollsApi = async () => {
  const res = await axios.get(`${url}/api/polls/user/ended/`, {
    headers: {
      Authorization: `Token ${getLoginToken()}`,
    },
  });
  return res;
};

export const FindPollsApi = async () => {
  const res = await axios.get(`${url}/api/polls/find/`, {
    headers: {
      Authorization: `Token ${getLoginToken()}`,
    },
  });
  return res;
};

export const ClosePollApi = async (poll_id) => {
  console.log("ClosePoll_pollID", poll_id);
  const res = await axios.get(`${url}/api/polls/user/${poll_id}/close/`, {
    headers: {
      Authorization: `Token ${getLoginToken()}`,
    },
  });
  return res;
};

export const VoteApi = async (data, poll_id) => {
  console.log("Vote_data", data);
  console.log("Vote_poll_id", poll_id);
  const res = await axios.post(
    `${url}/api/polls/${poll_id}/vote/`,
    { ...data },
    {
      headers: {
        Authorization: `Token ${getLoginToken()}`,
      },
    }
  );
  return res;
};
