import axios from 'axios';

const paymentApi = axios.create({
  baseURL: process.env.REACT_APP_PAYMENT_API_URL
});

export default paymentApi;