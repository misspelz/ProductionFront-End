import { getTokenFromLocalStorage } from "utils/token";

// MAIN URL
const mainURL = "https://development.2geda.net";

// request options
const requestOptions = {
  headers: {
    Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    "Content-Type": "application/json",
  },
};

// get current logged in user profile
export const getProfileData = async () => {
  try {
    const response = await fetch(
      `${mainURL}/api/account/profile/retrieve`,
      requestOptions
    );

    const data = await response.json();

    return data;
  } catch (err) {
    throw new Error(err);
  }
};

// edit user profile
export const updateProfile = async (profileData) => {
  try {
    const response = await fetch(`${mainURL}/api/account/profile/update/`, {
      ...requestOptions,
      method: "PATCH",
      body: JSON.stringify(profileData),
    });

    const data = await response.json();

    return data;
  } catch (err) {
    throw new Error(err);
  }
};

// Get user posts
export const getUserPosts = async (parameter) => {
  try {
    const response = await fetch(
      `${mainURL}/api/feeds/post/?filter=${parameter}`,
      requestOptions
    );

    const data = await response.json();

    return data.data;
  } catch (err) {
    throw new Error(err);
  }
};

// create new business
export const createBusiness = async (businessData) => {
  try {
    const response = await fetch(`${mainURL}/api/business/`, {
      ...requestOptions,
      method: "POST",
      body: JSON.stringify(businessData),
    });

    const data = await response.json();

    return data;
  } catch (err) {
    throw new Error(err);
  }
};

// get all current active business
export const getCurrentActiveBusiness = async () => {
  try {
    const response = await fetch(`${mainURL}/api/business/`, requestOptions);

    const data = await response.json();

    return data.data;
  } catch (err) {
    throw new Error(err);
  }
};

// changing password
export const changePassword = async (credentials) => {
  try {
    const response = await fetch(`${mainURL}/api/auth/change-password/`, {
      ...requestOptions,
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        ...requestOptions.headers,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    return data;
  } catch (err) {
    throw new Error(err);
  }
};

// delete account
export const deleteUserAccount = async () => {
  try {
    const response = await fetch(`${mainURL}/api/auth/delete-account/`, {
      ...requestOptions,
      method: "DELETE",
    });

    const data = await response.json();

    return data;
  } catch (err) {
    throw new Error(err);
  }
};

// get stickers
export const getUserStickers = async () => {
  try {
    const response = await fetch(`${mainURL}/api/my-stickers/`, requestOptions);

    const data = await response.json();

    return data;
  } catch (err) {
    throw new Error(err);
  }
};

// get current logged in user rewards
export const getRewards = async () => {
  try {
    const response = await fetch(
      `${mainURL}/api/reward/get-all/`,
      requestOptions
    );

    const data = await response.json();

    return data;
  } catch (err) {
    throw new Error(err);
  }
};

// get current logged in user rewards
export const getClaimedHistory = async () => {
  try {
    const response = await fetch(
      `${mainURL}/api/reward/claim/history/`,
      requestOptions
    );

    const data = await response.json();

    return data;
  } catch (err) {
    throw new Error(err);
  }
};
