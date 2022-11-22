import axios from 'axios';

export const getProfiles = async (limitParam = 3, options = {}) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users?_limit=${limitParam}`, options);
  return response.data;
};
