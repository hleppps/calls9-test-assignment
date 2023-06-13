import { chooseRandomValueFromArray } from './chooseRandomValueFromArray';

it('choose random value from array', async () => {
  const array = [1, 2];
  expect(array).toContain(chooseRandomValueFromArray(array));
});
