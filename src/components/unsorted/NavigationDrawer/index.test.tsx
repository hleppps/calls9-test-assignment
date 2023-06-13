/* eslint-disable @typescript-eslint/no-empty-function */
import { render } from '@testing-library/react';

import { NavigationDrawer } from '.';

it('renders', async () => {
  render(<NavigationDrawer open={true} handleClose={() => {}} />);
});
