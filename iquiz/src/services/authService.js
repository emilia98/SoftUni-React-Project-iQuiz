import * as request from './requester';

const baseURL = 'https://localhost:34601/auth';

export const login = (email, password) => {
    return request.post(`${baseURL}/login`, { email, password });
}

export const register = (username, email, password) => {
    return request.post(`${baseURL}/register`, { username, email, password});
}
