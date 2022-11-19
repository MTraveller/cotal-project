export const countNetwork = (data, requestCount) =>
  data
    .map((obj) =>
      obj.connecter_choice === `1` && obj.connecting_choice === `1`
        ? parseInt(obj.connecting_choice)
        : 0
    )
    .reduce((prevVal, currVal) => prevVal + currVal, requestCount);
