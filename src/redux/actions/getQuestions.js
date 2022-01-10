import axios from "axios";
import {
  QUESTION_GET_START,
  QUESTION_GET_SUCCESS,
  QUESTION_GET_FAIL
} from "../constants";

export const getQuestions = () => dispatch => {
  dispatch({ type: QUESTION_GET_START });
  axios
    .get("https://tech-sorting-hat1.herokuapp.com/api/questions")
    .then(res => dispatch({ type: QUESTION_GET_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: QUESTION_GET_FAIL, payload: err }));
};
