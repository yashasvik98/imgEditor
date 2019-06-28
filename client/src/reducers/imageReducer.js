import { GET_IMAGE, ADD_IMAGE } from "../actions/types";

const initialState = {
  image: { url: "uploads/1.png" }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_IMAGE:
      return {
        ...state
      };
    default:
      return state;
  }
}
