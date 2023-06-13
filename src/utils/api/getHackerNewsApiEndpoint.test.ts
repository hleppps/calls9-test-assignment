import { getHackerNewsApiEndpoint } from './getHackerNewsApiEndpoint';

it('gets hacker news api endpoint', async () => {
  
  expect(getHackerNewsApiEndpoint('/topstories')).toBe('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
});

