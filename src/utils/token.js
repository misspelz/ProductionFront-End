export const getTokenFromLocalStorage = () => {
  const token = localStorage.getItem('authToken');

  if (!token) {
    return '';
  }

  return token;
};
