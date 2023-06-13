import { Story } from 'types/global';

import { ContentType } from './constants';

export const dummyStories: Story[] = [
  {
    id: '1',
    title: 'Dummy Story 1 12 sadsd asdasdas s sdadasdasd asdasdas',
    text: 'Lorem ipsumLorem ipsumLorem ipsumLorLorem ipsumLorem ipsum ...',
    contentType: ContentType.VIDEO,
    image: { src: 'https://i.imgur.com/QpAmGdA.jpeg', alt: 'Alt Image' },
    tags: ['WOW', 'NOT WOW'],
  },
];
