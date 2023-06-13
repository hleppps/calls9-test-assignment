import { API } from 'utils/constants';

export const getHackerNewsApiEndpoint = (endpoint: string) => {
  return `${API.URL}${endpoint}${API.POSTFIX}`;
};
