import { getTokenFromLocalStorage } from "utils/token";

// MAIN URL
const mainURL = "https://development.2geda.net";

// request options
const requestOptions = {
  headers: {
    Authorization: `Bearer ${getTokenFromLocalStorage()}`,
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
export const updateProfile = async (formData) => {
  try {
    const response = await fetch(`${mainURL}/api/account/profile/update/`, {
      ...requestOptions,
      method: "PATCH",
      body: formData,
    });

    const data = await response.json();

    console.log(data);

    return data;
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
    });

    const data = await response.json();

    return data;
  } catch (err) {
    throw new Error(err);
  }
};

// changing password
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

// changing password
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
