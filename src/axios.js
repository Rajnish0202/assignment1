import axios from 'axios';

export const getProfiles = async (pageParam = 1, options = {}) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users?_page=${pageParam}`, options);
  return response.data;
};
