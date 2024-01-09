export default function orderByProps(obj, sortOrder) {
  const result = [];
  if (sortOrder) {
    for (const sortKey of sortOrder) {
      result.push({
        key: sortKey, value: obj[sortKey],
      });
      delete obj[sortKey];
    }
  }
  for (const objKey of Object.keys(obj).sort()) {
    result.push({
      key: objKey, value: obj[objKey],
    });
  }
  return result;
}
