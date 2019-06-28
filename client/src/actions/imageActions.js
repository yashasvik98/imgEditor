import { GET_IMAGE, ADD_IMAGE } from "./types";
import axios from "axios";

export const getImage = () => dispatch => {
  axios
    .get("/getimage")
    .then(res => {
      dispatch({
        type: GET_IMAGE,
        payload: res.data
      });
      console.log(res.data);
    })
    .catch(err => console.log(err));
};

export const addImage = img => {
  return {
    type: ADD_IMAGE,
    payload: img
  };
};
