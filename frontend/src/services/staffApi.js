import axios from 'axios';

const staffApi = axios.create({
  baseURL: 'http://localhost:8083/staff-service', 
  headers: {
    'Content-Type': 'application/json',
  },
});
export default staffApi;