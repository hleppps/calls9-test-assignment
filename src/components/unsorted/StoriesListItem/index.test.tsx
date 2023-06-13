import { render } from '@testing-library/react';
import { ContentType } from 'utils/constants';

import { StoriesListItem } from '.';

it('renders', async () => {
  const story = {
    id: 1,
    title: 'Dummy Story 1 12 sadsd asdasdas s sdadasdasd asdasdas',
    text: 'Lorem ipsumLorem ipsumLorem ipsumLorLorem ipsumLorem ipsu Lorem ipsumLorem ipsumLorem ipsumLorLorem ipsumLorem ipsu Lorem ipsumLorem ipsumLorem ipsumLorLorem ipsumLorem ipsu Lorem ipsumLorem ipsumLorem ipsumLorLorem ipsumLorem ipsu Lorem ipsumLorem ipsumLorem ipsumLorLorem ipsumLorem ipsum',
    contentType: 'photo' as ContentType,
    image: { src: 'https://i.imgur.com/QpAmGdA.jpeg', alt: 'Alt Image' },
    tags: ['WOW', 'NOT WOW'],
  }
  render(<StoriesListItem {...story} />);
});
