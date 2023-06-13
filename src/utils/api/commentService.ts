import { Comment } from 'types/global';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const postComment = (comment: Comment) => {
  console.log('Sending comment post request...');
  return Promise.resolve();
};
