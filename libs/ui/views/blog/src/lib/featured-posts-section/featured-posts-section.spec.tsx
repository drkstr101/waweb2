import { render } from '@testing-library/react';

import FeaturedPostsSection from './featured-posts-section';

describe('FeaturedPostsSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturedPostsSection />);
    expect(baseElement).toBeTruthy();
  });
});
