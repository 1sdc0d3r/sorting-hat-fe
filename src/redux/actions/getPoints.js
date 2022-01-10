import axios from 'axios';
import {
	POINTS_GET_START,
	POINTS_GET_SUCCESS,
	POINTS_GET_FAIL,
} from '../constants';

export const getPoints = () => (dispatch) => {
	dispatch({type: POINTS_GET_START});
	axios
		.get('https://tech-sorting-hat1.herokuapp.com/api/points')
		.then((res) => dispatch({type: POINTS_GET_SUCCESS, payload: res.data}))
		.catch((err) => dispatch({type: POINTS_GET_FAIL, payload: err}));
};
