import axios from "axios";

const BASE_URL = "http://localhost:8083/mind-help/appointments";

export const getAppointments = () => axios.get(BASE_URL);

export const bookAppointment = (slotId, feedback) =>
  axios.post(`${BASE_URL}/book`, { slotId, feedback });

export const cancelAppointment = (id) =>
  axios.put(`${BASE_URL}/${id}/cancel`);
