import axios from "axios";

export const API_KEY = "2cb907c2235f9fbff3d2c4a2b3a0fb56";

export const api = axios.create({
  baseURL: "https://api.openweathermap.org",
});
