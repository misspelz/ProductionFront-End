import axios from "axios";
import { url } from "../../utils/index";

let token = null;

export const setToken = (newToken) => {
  token = newToken;
};

export const getToken = () => {
  if (!token) {
    token = localStorage.getItem("authTOken");
    console.log("regtoken", token);
  }
  return token;
};

export const getLoginToken = () => {
  if (!token) {
    token = localStorage.getItem("authToken");
    console.log("logintoken", token);
  }
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
  const res = await axios.get(`${url}/api/user/account/profile/`, {
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

export const CreatePollApi = async (formData) => {
  const res = await axios.post(
    `${url}/api/polls/`,
    { ...formData },
    {
      headers: {
        Authorization: `Token ${getLoginToken()}`,
      },
    }
  );
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

export const CastVoteApi = async (payload) => {
  const res = await axios.post(
    `${url}/api/poll/cast-vote/`,
    { ...payload },
    {
      headers: {
        Authorization: `Token ${getLoginToken()}`,
      },
    }
  );
  return res;
};

export const SuggestedPollsApi = async () => {
  const res = await axios.get(`${url}/api/poll/suggested-polls/`, {
    headers: {
      Authorization: `Token ${getLoginToken()}`,
    },
  });
  return res;
};
