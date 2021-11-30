import axios from 'axios';

const api = axios.create({
    baseURL: 'https://morning-ocean-92164.herokuapp.com/api/v1',
});

export default api;