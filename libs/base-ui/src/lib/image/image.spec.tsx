import { render } from '@testing-library/react';
import Image from './image';

describe('Image', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Image
        src="https://www.datocms-assets.com/64528/1646636342-icon.png"
        width={512}
        height={512}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
