export const isAuthenticated = () => {
  const userInfoString = localStorage.getItem("2gedaUserInfo");

  const userInfo = JSON.parse(userInfoString);

  if (!userInfo) {
    return false;
  }

  return userInfo;
};

