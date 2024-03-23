import axios from "axios";
import { url } from "utils/index";
import { getLoginToken } from "./auth&poll";

export const NearbyUsersApi = async () => {
  const res = await axios.get(`${url}/api/connect/nearby-user/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};

export const ANearbyUserApi = async (user_id) => {
  const res = await axios.get(`${url}/api/connect/nearby-user/${user_id}/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};

export const BusinessesNearbyApi = async () => {
  const res = await axios.get(`${url}/api/connect/nearby-business/`, {
    headers: {
      Authorization: `Bearer ${getLoginToken()}`,
    },
  });
  return res;
};

export const ABusinessNearbyApi = async (business_id) => {
  const res = await axios.get(
    `${url}/api/connect/nearby-business/${business_id}/`,
    {
      headers: {
        Authorization: `Bearer ${getLoginToken()}`,
      },
    }
  );
  return res;
};
