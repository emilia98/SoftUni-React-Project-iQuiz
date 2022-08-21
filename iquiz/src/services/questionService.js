import * as request from './requester';

const baseUrl = 'https://localhost:34601/api/questions';

export const getAll = () => request.get(baseUrl);

export const getById = (id) => request.get(`${baseUrl}/${id}`);

export const create = (data) => request.post(baseUrl, data);

export const deleteById = (id) => request.del(`${baseUrl}/${id}`);


/*
import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/games';

export const getAll = () => request.get(baseUrl);

export const getOne = (gameId) => request.get(`${baseUrl}/${gameId}`);

export const create = (gameData) => request.post(baseUrl, gameData);

export const edit = (gameId, gameData) => request.put(`${baseUrl}/${gameId}`, gameData);

export const remove = (gameId) => request.del(`${baseUrl}/${gameId}`);
*/