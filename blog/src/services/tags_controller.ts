import api from './api';

export const findAllTags = async () : Promise<string[]> => {
  const res = await api.get('/database/tag');
  return res.data;
}