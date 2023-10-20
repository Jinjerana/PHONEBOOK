const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const getFetching = state => state.auth.isFetching;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getFetching,
};

export default authSelectors;
