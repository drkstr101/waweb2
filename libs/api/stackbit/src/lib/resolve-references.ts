import { Model, PostLayoutModel } from '@watheia/model';
import { findObjectById } from './find-object-by-id';

export function resolveReferences(
  object: string | PostLayoutModel[],
  fieldPaths: string[],
  objects: Model[],
  debugContext = { keyPath: [], stack: [] }
) {
  const _resolveDeep = (
    value: any,
    fieldNames: (string | number)[],
    debugContext: { keyPath: any; stack: any }
  ): any => {
    if (typeof value === 'string') {
      const result = findObjectById(value, objects, debugContext);
      return _resolveDeep(result, fieldNames, debugContext);
    } else if (Array.isArray(value)) {
      return value
        .map((item, index) =>
          _resolveDeep(item, fieldNames, {
            keyPath: debugContext.keyPath.concat(index),
            stack: debugContext.stack.concat([value])
          })
        )
        .filter(Boolean);
    }

    if (!value || fieldNames.length === 0) {
      return value;
    }
    const [fieldName, ...tail] = fieldNames;
    if (!(fieldName in value)) {
      return value;
    }
    const result = _resolveDeep(value[fieldName], tail, {
      keyPath: debugContext.keyPath.concat(fieldName),
      stack: debugContext.stack.concat(value)
    });
    return {
      ...value,
      [fieldName]: result
    };
  };

  return fieldPaths.reduce((object, fieldPath) => {
    const fieldNames = fieldPath.split('.');
    return _resolveDeep(object, fieldNames, debugContext);
  }, object);
}
