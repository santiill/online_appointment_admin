import axios from "axios";

const token = localStorage.getItem("token");

const API = axios.create({
  baseURL: "https://online-appointment-kg.herokuapp.com/api/doctor/",
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export const request = {
  login: (formData) => API.post("auth", formData),
  registration: (formData) => API.post("fake", formData),
};
