import axios from "axios";

const axios_setup = axios.create({
  baseURL: "http://localhost:3000", // Added protocol (http://)
  timeout: 2000,
  withCredentials: true,
});

export default axios_setup;
