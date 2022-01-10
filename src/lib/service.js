import axios from 'axios';

export const getQuestion = () => axios.get('https://tech-sorting-hat1.herokuapp.com/api/questions');
