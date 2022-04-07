import { render } from '@testing-library/react';

import CtaSection from './cta-section';

describe('CtaSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CtaSection />);
    expect(baseElement).toBeTruthy();
  });
});
