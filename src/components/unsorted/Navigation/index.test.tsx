import { render } from '@testing-library/react';

import { Navigation } from '.';

it('renders', async () => {
  const items = ['Any Item'];
  render(<Navigation items={items} />);
});
