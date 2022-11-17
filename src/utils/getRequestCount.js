export const requestCount = (data, requestCount) =>
  data
    .map((obj, idx) =>
      obj.connecting_choice === `2` ? parseInt(obj.connecting_choice) - 1 : 0
    )
    .reduce((prevVal, currVal) => prevVal + currVal, requestCount);
