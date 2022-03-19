import { render } from '@testing-library/react';
import LabeledNav from './labeled-nav';

export const mockMetadata = (obj: Record<string, any> = {}): Metadata => {
  return {
    id: '',
    source: '',
    modelType: '',
    modelName: '',
    modelLabel: '',
    pageCssClasses: '',
    ...obj
  };
};

describe('LabeledNav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <LabeledNav text={''} to={''} styles={{}} type={'Action'} __metadata={mockMetadata()} />
    );
    expect(baseElement).toBeTruthy();
  });
});
