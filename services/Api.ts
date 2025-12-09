import axios from "axios";

const STARTBASE_URL = 'http://localhost:8000'
const API_VERSION = 'v1';

const apiClient = axios.create({
  baseURL: `${STARTBASE_URL}/api/${API_VERSION}`,
  timeout: 10000,
  withCredentials: true,
});

export default apiClient;