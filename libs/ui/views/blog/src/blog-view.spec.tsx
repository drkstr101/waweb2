import { render } from '@testing-library/react';

import BlogView from './blog-view';

describe('BlogView', () => {
  it('should render successfully', () => {
    const { container } = render(<BlogView />);
    expect(container).toBeInstanceOf(HTMLElement);
    expect(container).toMatchSnapshot();
  });
});
