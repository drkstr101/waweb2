import { MockComponent } from './config-context.composition';
import { render } from '@testing-library/react';

it('should render the button in the color blue', () => {
  const { getByText } = render(<MockComponent />);
  const rendered = getByText('Watheia');
  expect(rendered).toBeTruthy();
});
