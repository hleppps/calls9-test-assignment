import { render } from '@testing-library/react';

import { Select } from '.';

it('renders', async () => {
  render(<Select options={[{ label: 'Label', value: 'value' }]} />);
});
