export enum ContentType {
  VIDEO = 'video',
  PHOTO = 'photo',
}

export const API = {
  URL: 'https://hacker-news.firebaseio.com/v0',
  POSTFIX: '.json?print=pretty',
};

export enum Endpoint {
  TOP_STORIES = '/topstories',
  ITEM = '/item',
}

export enum ActionType {
  COMMENT = 'comment',
}

export const TOTAL_STORIES = 9;
