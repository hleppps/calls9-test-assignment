import { ContentType } from 'utils/constants';

export type Story = {
  id: string;
  title: string;
  text: string;
  contentType: ContentType;
  image: { src: string; alt: string };
  tags: string[];
};
