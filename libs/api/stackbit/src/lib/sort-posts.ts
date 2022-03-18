import { PostLayoutModel } from '@watheia/model';

export function sortPosts(posts: PostLayoutModel[]) {
  return posts.sort(
    (postA, postB) => new Date(postB.date).getTime() - new Date(postA.date).getTime()
  );
}
