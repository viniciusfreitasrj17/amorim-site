import axios from 'axios';

const apiMail = axios.create({
    baseURL: 'http://localhost:4000'
});

export { apiMail };