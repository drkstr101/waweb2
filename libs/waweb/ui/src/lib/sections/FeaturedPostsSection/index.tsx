import { FeaturedPostsSectionModel } from '@watheia/model';
import PostFeedSection from '../PostFeedSection';
export default function FeaturedPostSection(props: FeaturedPostsSectionModel) {
  return <PostFeedSection {...props} annotatePosts={true} />;
}
