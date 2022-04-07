import Layout from '@watheia/ui.layout.base';
import HomeView from '@watheia/ui.views.home';

export default function IndexPage() {
  return (
    <Layout options={{ useBackdrop: true }}>
      <HomeView />
    </Layout>
  );
}
