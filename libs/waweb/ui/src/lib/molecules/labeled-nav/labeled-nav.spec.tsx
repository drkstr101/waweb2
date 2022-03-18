import { render } from '@testing-library/react';

import LabeledNav from './labeled-nav';

describe('LabeledNav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LabeledNav />);
    expect(baseElement).toBeTruthy();
  });
});
