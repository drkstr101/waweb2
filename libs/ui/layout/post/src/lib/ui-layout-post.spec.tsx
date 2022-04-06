import { render } from '@testing-library/react';

import UiLayoutPost from './ui-layout-post';

describe('UiLayoutPost', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiLayoutPost />);
    expect(baseElement).toBeTruthy();
  });
});
