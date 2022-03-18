import { Model } from '@watheia/model';
import { mapObjectsById } from './map-objects-by-id';

export function resolveReferenceArray(
  object: Model,
  fieldName: string,
  objects: Model[],
  debugContext: { keyPath: string | any[]; stack: any[] }
) {
  if (!(fieldName in object)) {
    return object;
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const result = mapObjectsById(object[fieldName], objects, {
    keyPath: debugContext.keyPath.concat(fieldName),
    stack: debugContext.stack.concat(object)
  });
  return {
    ...object,
    [fieldName]: result
  };
}
