export const compareObjectsGetUpdatedProperties = (
  oldObj: Record<string, any>,
  newObj: Record<string, any>,
  blacklist: string[],
) => {
  const changes: { [key: string]: { old: any; new: any } } = {};

  Object.keys({ ...oldObj, ...newObj }).forEach((key) => {
    // Bỏ qua những key nằm trong blacklist
    if (blacklist.includes(key)) return;

    if (oldObj[key] !== newObj[key]) {
      changes[key] = { old: oldObj[key], new: newObj[key] };
    }
  });

  return changes;
};

// Sắp xếp theo độ dài giảm dần của key cho object
export const sortObjectByKeyLengthDesc = (obj: Record<string, any>): Record<string, any> => {
  return Object.fromEntries(Object.entries(obj).sort(([keyA], [keyB]) => keyB.length - keyA.length));
};

export const getKeyValuesFromObject = (object: any, keys: string[]) => {
  let key = '';
  keys.forEach((e) => (key += object[e]));
  return key;
};
