import { CHANGE_USER_DATA } from "./action-types";
const initialState = {
  firstname: "Alan",
  lastname: "Turing",
  email: "alan@turing.dev",
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER_DATA:
      return {
        ...state,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        email: action.payload.email,
      };
    default: {
      return state;
    }
  }
};

export default userReducer;
