import { render } from '@testing-library/react';

import FeaturesSection from './features-section';

describe('FeaturesSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesSection />);
    expect(baseElement).toBeTruthy();
  });
});
