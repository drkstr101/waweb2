import { render } from '@testing-library/react';
import { Body, Code, Detail, Heading } from './typography';

describe('watheia.waweb/base-ui.typography', () => {
  it('Heading should render successfully', () => {
    const { container } = render(<Heading component="h1">Hello, World!</Heading>);
    expect(container).toBeInstanceOf(HTMLElement);
    expect(container).toMatchSnapshot();
  });
  it('Body should render successfully', () => {
    const { container } = render(<Body>Hello, World!</Body>);
    expect(container).toBeInstanceOf(HTMLElement);
    expect(container).toMatchSnapshot();
  });
  it('Heading should render successfully', () => {
    const { container } = render(<Code component="pre">Hello, World!</Code>);
    expect(container).toBeInstanceOf(HTMLElement);
    expect(container).toMatchSnapshot();
  });
  it('Heading should render successfully', () => {
    const { container } = render(<Detail>Hello, World!</Detail>);
    expect(container).toBeInstanceOf(HTMLElement);
    expect(container).toMatchSnapshot();
  });
});
