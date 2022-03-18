import { Model } from '@watheia/model';
import { findObjectById } from './find-object-by-id';

export function mapObjectsById(
  objectIds: string[],
  objects: Model[],
  debugContext: any
): Model[] {
  return (objectIds ?? [])
    .map((objectId, index) =>
      findObjectById(objectId, objects, {
        keyPath: debugContext.keyPath.concat(index),
        stack: debugContext.stack.concat([objectIds])
      })
    )
    .filter(Boolean);
}
