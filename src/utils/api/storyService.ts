import { faker } from '@faker-js/faker';
import { HackerNewsStory } from 'types/api';
import { Story } from 'types/global';
import { chooseRandomValueFromArray } from 'utils/chooseRandomValueFromArray';
import { dummyImages } from 'utils/dummyImages';

import { ContentType, Endpoint, TOTAL_STORIES } from '../constants';
import { client } from './client';
import { getHackerNewsApiEndpoint } from './getHackerNewsApiEndpoint';

export const getTopStoryIds = (): Promise<number[]> => {
  return client
    .get(getHackerNewsApiEndpoint(Endpoint.TOP_STORIES))
    .then((response) => response.data);
};

export const getStory = (storyId: number): Promise<HackerNewsStory> => {
  return client
    .get(getHackerNewsApiEndpoint(`${Endpoint.ITEM}/${storyId}`))
    .then((response) => response.data);
};

export const getTopStories = async (): Promise<Story[]> => {
  const topStoryIds = (await getTopStoryIds()).slice(0, TOTAL_STORIES);

  const topStories = Promise.all(
    topStoryIds.map(async (topStoryId) => {
      const { id, title } = await getStory(topStoryId);
      const story: Story = {
        id,
        title,
        contentType: chooseRandomValueFromArray([
          ContentType.PHOTO,
          ContentType.VIDEO,
        ]),
        image: chooseRandomValueFromArray(dummyImages),
        tags: [faker.word.noun(), faker.word.noun()],
        text: faker.lorem.text(),
      };
      return story;
    }),
  );

  return topStories;
};