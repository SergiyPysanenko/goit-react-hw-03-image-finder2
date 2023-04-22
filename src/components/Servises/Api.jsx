
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '34993491-75f64346bf709c0012e47f9c8';
const BASE_FILTERS = 'image_type=photo&orientation=horizontal&per_page=12';


export const getImages = async (searchValue, page) => {
  const response = await axios.get(
    `?q=${searchValue}&page=${page}&key=${API_KEY}&${BASE_FILTERS}`
  );
  return response.data;
};
