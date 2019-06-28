import { GET_IMAGE, ADD_IMAGE } from "../actions/types";

const initialState = {
  image: {}
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGE:
      console.log(action.payload);
      return {
        ...state,
        image: action.payload
      };
    default:
      return state;
  }
};

export default imageReducer;
