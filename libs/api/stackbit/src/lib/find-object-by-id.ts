export function findObjectById(
  objectId: any,
  objects: any[],
  debugContext: { keyPath: any; stack: any }
) {
  if (!objectId) {
    return null;
  }
  const object =
    objects.find((object: { __metadata: { id: any } }) => object.__metadata?.id === objectId) ||
    null;
  if (!object && debugContext) {
    const reverseStack = debugContext.stack.slice().reverse();
    const objectIndex = reverseStack.findIndex(
      (object: { __metadata: { relProjectPath: any } }) => !!object.__metadata?.relProjectPath
    );
    if (objectIndex >= 0) {
      const filePath = reverseStack[objectIndex].__metadata.relProjectPath;
      const fieldPath = debugContext.keyPath
        .slice()
        .reverse()
        .slice(0, objectIndex + 1)
        .reverse()
        .join('.');
      console.warn(
        `The '${objectId}' referenced in file '${filePath}' in field '${fieldPath}' was not found`
      );
    }
  }
  return object;
}
