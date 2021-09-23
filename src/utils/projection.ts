export function projection(select: object) {
  if (!select || Array.isArray(select)) {
    return {};
  }
  const projection = Object.entries(select).reduce(
    (previousValue, currentValue) => {
      if (currentValue[1]) {
        return {
          ...previousValue,
          ...JSON.parse(`{ "${currentValue[0]}": 1 }`),
        };
      } else {
        return {
          ...previousValue,
          ...JSON.parse(`{ "${currentValue[0]}": 0 }`),
        };
      }
    },
    {}
  );
  return projection;
}
