import { ContentType } from 'utils/constants';

export type Story = {
  id: number;
  title: string;
  text: string;
  contentType: ContentType;
  image: { src: string; alt: string };
  tags: string[];
};

export type Comment = {
  userName: string;
  storyId: string;
  text: string;
  time: string;
  type: 'comment';
};

export type Image = {
  src: string;
  alt: string;
};
