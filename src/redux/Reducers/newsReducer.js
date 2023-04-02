const ADD_NEWS = "ADD_NEWS";
const initialState = [];
const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWS:
      return [...state, ...action.payload.news];
    default:
      return state;
  }
};

export default newsReducer;
