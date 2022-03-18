import { Model, PostLayoutModel } from '@watheia/model';

export function getAllPosts(objects: Model[]): PostLayoutModel[] {
  return objects.filter((object) => object['layout'] === 'PostLayout') as PostLayoutModel[];
}
