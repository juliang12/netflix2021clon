const TYPES = {
  USER: "USER",
};

const InitialState = {
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.USER: {
      const newUser = action.payload;
      return {
        ...state,
        user: newUser,
      };
    }
    default:
      return state;
  }
};

export { reducer, InitialState, TYPES };
