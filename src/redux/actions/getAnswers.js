import axios from "axios";
import {
  ANSWER_GET_START,
  ANSWER_GET_SUCCESS,
  ANSWER_GET_FAIL
} from "../constants";

export const getAnswers = () => dispatch => {
  dispatch({ type: ANSWER_GET_START });
  axios
    .get("https://tech-sorting-hat1.herokuapp.com/api/answers")
    .then(res => dispatch({ type: ANSWER_GET_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ANSWER_GET_FAIL, payload: err }));
};
