import { render } from '@testing-library/react';

import ContactView from './contact-view';

describe('ContactView', () => {
  it('should render successfully', () => {
    const { container } = render(<ContactView />);
    expect(container).toBeInstanceOf(HTMLElement);
    expect(container).toMatchSnapshot();
  });
});
