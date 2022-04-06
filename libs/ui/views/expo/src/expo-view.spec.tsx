import { render } from '@testing-library/react';

import ExpoView from './expo-view';

describe('ExpoView', () => {
  it('should render successfully', () => {
    const { container } = render(<ExpoView />);
    expect(container).toBeInstanceOf(HTMLElement);
    expect(container).toMatchSnapshot();
  });
});
