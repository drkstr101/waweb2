import { Model } from '@watheia/model';
import { findObjectById } from './find-object-by-id';

export function resolveReferenceField(
  object: Model,
  fieldName: string,
  objects: Model[],
  debugContext: { keyPath: (string | number)[]; stack: Model[] } = { keyPath: [], stack: [] }
) {
  if (!(fieldName in object)) {
    return object;
  }
  const result = findObjectById(object[fieldName], objects, {
    keyPath: debugContext.keyPath.concat(fieldName),
    stack: debugContext.stack.concat(object)
  });
  return {
    ...object,
    [fieldName]: result
  };
}
