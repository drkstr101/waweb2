export async function mapDeepAsync(
  value: any,
  iteratee: (arg0: any, arg1: any, arg2: any) => any,
  options: Record<string, any> = {}
) {
  const postOrder = options?.['postOrder'] ?? false;
  async function _mapDeep(
    value: { [s: string]: any } | ArrayLike<any>,
    keyPath: (string | number)[],
    stack: any[]
  ): Promise<any> {
    if (!postOrder) {
      value = await iteratee(value, keyPath, stack);
    }
    const childrenIterator = (val: any, key: string | number) => {
      return _mapDeep(val, keyPath.concat(key), stack.concat([value]));
    };
    if (value && typeof value == 'object' && value.constructor === Object) {
      const res: Record<string, any> = {};
      for (const [key, val] of Object.entries(value)) {
        res[key] = await childrenIterator(val, key);
      }
      value = res;
    } else if (Array.isArray(value)) {
      value = await Promise.all(value.map(childrenIterator));
    }
    if (postOrder) {
      value = await iteratee(value, keyPath, stack);
    }
    return value;
  }
  return _mapDeep(value, [], []);
}
