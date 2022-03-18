import { Model, PostLayoutModel } from '@watheia/model';
import { sortPosts } from './sort-posts';

export function getAllCategoryPostsSorted(objects: Model[], categoryId: string) {
  const allPosts = objects;
  const categoryPosts = allPosts.filter(
    (post) => (post as PostLayoutModel)?.category.slug === categoryId
  );
  return sortPosts(categoryPosts as PostLayoutModel[]);
}
