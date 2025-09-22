import axios from "axios";

const API = axios.create({ baseURL: "https://khalid-portfolio-hnie.onrender.com/api" });

export const fetchProjects = () => API.get("/projects");
export const sendContact = (formData) => API.post("/contact", formData);
