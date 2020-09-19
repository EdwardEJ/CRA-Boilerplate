import Axios from 'axios';

//testing dynamic methods of axiosWitAuth
export const axiosWithAuth = () => {
  const token = window.localStorage.getItem('token');
  return Axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: 'http://localhost:3000',
  });
};
