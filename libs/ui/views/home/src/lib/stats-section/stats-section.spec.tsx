import { render } from '@testing-library/react';

import StatsSection from './stats-section';

describe('StatsSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StatsSection />);
    expect(baseElement).toBeTruthy();
  });
});
