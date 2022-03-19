import sourcebit from 'sourcebit';
import { sourcebitDataClient } from 'sourcebit-target-next';

describe('watheia/api.stackbit.static-props-resolvers', () => {
  beforeEach(async () => {
    const sourcebitConfig = await import('./__test__/sourcebit.js');
    sourcebit.fetch(sourcebitConfig);
  });

  it('should resolve static props for "/"', async () => {
    const data = await sourcebitDataClient.getData();
    console.log(data);
    // const props = await resolveStaticProps('/', data);
    // expect(props).to.have.property('page');
    // expect(props).to.have.property('site');
  });
});
