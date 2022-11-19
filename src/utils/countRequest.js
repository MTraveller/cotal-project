export const countRequest = (data, requestCount) =>
  data
    .map((obj) =>
      obj.connecting_choice === `2` ? parseInt(obj.connecting_choice) - 1 : 0
    )
    .reduce((prevVal, currVal) => prevVal + currVal, requestCount);
