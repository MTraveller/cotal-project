export const checkEquality = (state, server) => {
  const stateEntries = Object.entries(state);
  const serverEntries = Object.entries(server);

  const serverChanges = {};

  stateEntries.forEach((obj, idx) => {
    if (typeof obj[1] === `object`) {
      if (obj[1] !== null) {
        if (obj[0] === `image`) {
          if (serverEntries[idx][1]?.name !== obj[1].name) {
            serverChanges[obj[0]] = obj[1];
          }
        } else {
          if (obj[0] === `socials`) {
            const socialServerChanges = [];

            obj[1].forEach((o, i) => {
              if (serverEntries[idx][i]?.username !== o.username) {
                socialServerChanges.push(stateEntries[idx][1][i]);
              }
            });

            serverChanges[obj[0]] = socialServerChanges;
          }
        }

        console.log('isArray', idx, Array.isArray(obj));
      }
    } else {
      if (serverEntries[idx][1] !== obj[1]) {
        if (stateEntries[idx][1] !== undefined) {
          serverChanges[obj[0]] = obj[1];
        }
      }
    }
  });

  return serverChanges;
};
