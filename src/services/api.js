import axios from 'axios';

// axios.defaults.baseURL =
//   'https://pixabay.com/api/?q=cat&page=1&key=39866612-e7964125725bbe7947c64adff&image_type=photo&orientation=horizontal&per_page=12';

axios.defaults.baseURL = 'https://pixabay.com';

const API_KEY = '39866612-e7964125725bbe7947c64adff';

export const fetchImages = async params => {
  const { data } = await axios.get('/api/', {
    params: {
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      page: 1,
      ...params,
    },
  });
  return data;
};
