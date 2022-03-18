import { Model, PostLayoutModel } from '@watheia/model';
import { getAllPosts } from './get-all-posts';
import { sortPosts } from './sort-posts';

export function getAllAuthorPostsSorted(objects: Model[], authorId: string) {
  const allPosts = getAllPosts(objects) as PostLayoutModel[];
  const authorPosts = allPosts.filter((post) => post.author?.firstName === authorId);
  return sortPosts(authorPosts);
}
