import { getTokenFromLocalStorage } from 'utils/token';

// MAIN URL
const mainURL = 'https://development.2geda.net';

// getting current logged user token
const token = getTokenFromLocalStorage();

// appending token to authorization header
const myHeaders = new Headers();
myHeaders.append('Authorization', `Token ${token}`);
myHeaders.append('Content-Type', 'application/json');

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
};

/**
 * --------------------------------
 * REQUEST BELOW :)
 * --------------------------------
 */
// get current logged in user profile
export const getProfileData = async () => {
  try {
    const response = await fetch(
      `${mainURL}/api/user/account/profile/`,
      requestOptions
    );

    const data = await response.json();

    return data;
  } catch (err) {
    throw new Error(err);
  }
};

// edit user profile
export const editProfile = async (formData) => {
  try {
    const response = await fetch(
      `${mainURL}/api/user/account/profile/update/`,
      { ...requestOptions, method: 'PUT', body: JSON.stringify(formData) }
    );

    const data = await response.json();

    return data;
  } catch (err) {
    throw new Error(err);
  }
};

// changing password
export const changePassword = async (credentials) => {
  try {
    const response = await fetch(`${mainURL}/api/user/auth/change-password/`, {
      ...requestOptions,
      method: 'POST',
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
    const response = await fetch(`${mainURL}/api/user/auth/delete-account/`, {
      ...requestOptions,
      method: 'DELETE',
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
    const response = await fetch(
      `${mainURL}/api/user/my-stickers/`,
      requestOptions
    );

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
