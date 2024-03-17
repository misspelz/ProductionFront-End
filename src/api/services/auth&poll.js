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
  const res = await axios.post(`${url}/api/auth/register/`, {
    ...payload,
  });
  return res;
};

export const Login = async (payload) => {
  const res = await axios.post(`${url}/api/auth/login/`, { ...payload });
  return res;
};

export const UserInfoApi = async (userToken) => {
  const res = await axios.get(`${url}/api/account/profiles/retrieve/`, {
    headers: {
      Authorization: `Bearer ${userToken || getToken()}`,
    },
  });
  return res;
};

export const ReSendOTP = async (verificationType) => {
  const res = await axios.get(
    `${url}/api/auth/resend-otp/?verification_type=${verificationType}`,
    {
      headers: {
        Authorization: `Bearer ${getLoginToken()}`,
      },
    }
  );
  return res;
};

export const VerifyOTP = async (data) => {
  const res = await axios.post(
    `${url}/api/auth/verify-account/`,
    { ...data },
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );
  return res;
};

export const ResetPassword = async (data) => {
  const res = await axios.post(
    `${url}/api/auth/reset-password/`,
    { ...data },
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );
  return res;
};

export const ForgotPassword = async (data) => {
  const res = await axios.post(
    `${url}/api/auth/forgot-password/`,
    { ...data },
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
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
        Authorization: `Bearer ${getLoginToken()}`,
      },
    }
  );
  return res;
};

export const UpdatePollApi = async (pollData, pollID) => {
  console.log("editpoll", pollData);
  console.log("editpollid", pollID);
  const res = await axios.put(
    `${url}/api/polls/user/${pollID}/`,
    { ...pollData },
    {
      headers: {
        Authorization: `Bearer ${getLoginToken()}`,
      },
    }
  );
  return res;
};

export const DeletePollApi = async (pollID) => {
  const res = await axios.delete(`${url}/api/polls/user/${pollID}/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};

export const PollsApi = async () => {
  const res = await axios.get(`${url}/api/polls/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};

export const MyPollsApi = async () => {
  const res = await axios.get(`${url}/api/polls/user/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};

export const SuggestedPollsApi = async () => {
  const res = await axios.get(`${url}/api/polls/suggested/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};

export const PromotedPollsApi = async () => {
  const res = await axios.get(`${url}/api/polls/promoted/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};

export const ActivePollsApi = async () => {
  const res = await axios.get(`${url}/api/polls/user/active/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};

export const EndedPollsApi = async () => {
  const res = await axios.get(`${url}/api/polls/user/ended/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};

export const FindPollsApi = async (search) => {
  const res = await axios.get(`${url}/api/polls/find/?find=${search}`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};

export const FindUserPollsApi = async (search) => {
  const res = await axios.get(`${url}/api/polls/user/find/?find=${search}`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};

export const ClosePollApi = async (poll_id) => {
  const res = await axios.get(`${url}/api/polls/user/${poll_id}/close/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};

export const VoteApi = async (data, poll_id) => {
  const res = await axios.post(
    `${url}/api/polls/${poll_id}/vote/`,
    { ...data },
    {
      headers: {
        Authorization: `Bearer ${getLoginToken()}`,
      },
    }
  );
  return res;
};

export const NotificationsApi = async () => {
  const res = await axios.get(`${url}/api/notifications/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};
