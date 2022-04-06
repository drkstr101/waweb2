import { render } from '@testing-library/react';

import UiLayoutDocs from './ui-layout-docs';

describe('UiLayoutDocs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiLayoutDocs />);
    expect(baseElement).toBeTruthy();
  });
});
