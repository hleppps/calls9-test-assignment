import { ActionType, ContentType } from 'utils/constants';

export type Story = {
  id: number;
  title: string;
  text: string;
  contentType: ContentType;
  image: { src: string; alt: string };
  tags: string[];
};

export type Comment = {
  by: string;
  parent: number;
  text: string;
  time: string;
  type: ActionType;
};

export type Image = {
  src: string;
  alt: string;
};
