import { usersAPI } from "../../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_LOADING = "TOOGLE_IS_LOADING";
const BUTTON_DISABLING = "BUTTON_DISABLING";
const BUTTON_UNDISABLING = "BUTTON_UNDISABLING";

const initialState = {
  users: [],
  currentPage: 1,
  pageUsers: 20,
  totalUsers: 0,
  isLoading: false,
  disabledButtons: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.payload.id) {
            return {
              ...user,
              followed: true,
            };
          } else {
            return user;
          }
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.payload.id) {
            return {
              ...user,
              followed: false,
            };
          } else {
            return user;
          }
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.payload.users],
      };
    case SET_TOTAL_USERS:
      return {
        ...state,
        totalUsers: action.payload.totalUsersCount,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload.currentPage,
      };
    case TOGGLE_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case BUTTON_DISABLING:
      return {
        ...state,
        disabledButtons: [...state.disabledButtons, action.payload.userId],
      };
    case BUTTON_UNDISABLING:
      return {
        ...state,
        disabledButtons: state.disabledButtons.filter((userId) => {
          return userId !== action.payload.userId;
        }),
      };
    default:
      return state;
  }
};

// Action Creators

export const followAC = (userId) => {
  return {
    type: FOLLOW,
    payload: {
      id: userId,
    },
  };
};

export const unfollowAC = (userId) => {
  return {
    type: UNFOLLOW,
    payload: {
      id: userId,
    },
  };
};

export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    payload: {
      users: users,
    },
  };
};

export const setTotalUsersAC = (totalUsersCount) => {
  return {
    type: SET_TOTAL_USERS,
    payload: {
      totalUsersCount,
    },
  };
};

export const setCurrentPageAC = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: {
      currentPage: page,
    },
  };
};

export const toggleIsLoadingAC = (bool) => {
  return {
    type: TOGGLE_IS_LOADING,
    payload: {
      isLoading: bool,
    },
  };
};

export const disabledButtonAC = (userId) => {
  return {
    type: BUTTON_DISABLING,
    payload: {
      userId,
    },
  };
};
export const undisabledButtonAC = (userId) => {
  return {
    type: BUTTON_UNDISABLING,
    payload: {
      userId,
    },
  };
};

// THUNKS

// Get Users Thunk

export const setUsers = (pageUsers, currentPage) => {
  console.log("Users");
  return (dispatch) => {
    dispatch(toggleIsLoadingAC(true));
    usersAPI.getUsers(pageUsers, currentPage).then((data) => {
      dispatch(toggleIsLoadingAC(false));
      dispatch(setUsersAC(data.items));
      dispatch(setTotalUsersAC(data.totalCount));
    });
  };
};

export const setCurrentPage = (pageUsers, page) => {
  return (dispatch) => {
    dispatch(toggleIsLoadingAC(true));
    dispatch(setCurrentPageAC(page));
    usersAPI.getUsers(pageUsers, page).then((data) => {
      dispatch(toggleIsLoadingAC(false));
      dispatch(setUsersAC(data.items));
    });
  };
};

// Follow & Unfollow Thunk

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(disabledButtonAC(userId));
    usersAPI.follow(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(followAC(userId));
      }
      dispatch(undisabledButtonAC(userId));
    });
  };
};

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(disabledButtonAC(userId));
    usersAPI.unfollow(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollowAC(userId));
      }
      dispatch(undisabledButtonAC(userId));
    });
  };
};

export default usersReducer;
