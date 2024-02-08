import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AxiosService() {
  let navigate = useNavigate();
  const apiUrl = 'http://localhost:8000/api/';

  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    return JSON.parse(tokenString);
  };

  const saveToken = (data) => {
    localStorage.setItem("token", JSON.stringify(data?.token));
    localStorage.setItem("rol", data?.rol);
    data?.dataUser && localStorage.setItem("data", JSON.stringify(data?.dataUser));
  };

  const deleteToken = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("rol");
    localStorage.removeItem("data");
    navigate("/");
  };

  const http = axios.create({
    baseURL: apiUrl,
    headers: {
       "Content-type": "application/json",
       Authorization: `Bearer ${getToken()}`,
    },
 });

  return {
    getToken,
    deleteToken,
    setToken: saveToken,
    http,
  };
}
