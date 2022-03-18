import { render } from '@testing-library/react';

import NavLinkc from './nav-linkc';

describe('NavLinkc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavLinkc />);
    expect(baseElement).toBeTruthy();
  });
});
