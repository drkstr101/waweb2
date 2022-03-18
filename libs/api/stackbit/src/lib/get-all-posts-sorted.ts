import { Model, PostLayoutModel } from '@watheia/model';
import { getAllPosts } from './get-all-posts';
import { sortPosts } from './sort-posts';

export function getAllPostsSorted(objects: Model[]) {
  const allPosts = getAllPosts(objects);
  return sortPosts(allPosts as PostLayoutModel[]);
}
