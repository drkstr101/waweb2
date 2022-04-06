import { render } from '@testing-library/react';

import UiLayoutGallary from './ui-layout-gallary';

describe('UiLayoutGallary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiLayoutGallary />);
    expect(baseElement).toBeTruthy();
  });
});
