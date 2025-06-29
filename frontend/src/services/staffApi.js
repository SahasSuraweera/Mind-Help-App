import axios from 'axios';

const paymentApi = axios.create({
  baseURL: 'http://localhost:8083/staff-service',
});

export default staffApi;