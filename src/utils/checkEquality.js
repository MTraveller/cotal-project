export const checkEquality = (personal, social, server) => {
  const personalEntries = Object.entries(personal);
  const socialsEntries = Object.entries(social);
  const serverEntries = Object.entries(server);

  const serverChanges = {};

  personalEntries.forEach((obj, idx) => {
    if (typeof obj[1] === `object`) {
      if (obj[1] !== null) {
        if (obj[0] === `image`) {
          if (serverEntries[idx][1]?.name !== obj[1].name) {
            serverChanges[obj[0]] = obj[1];
          }
        }
      }
    } else {
      if (serverEntries[idx][1] !== obj[1]) {
        if (personalEntries[idx][1] !== undefined) {
          if (personalEntries[idx][0] === `linktrees`) {
            if (serverEntries[idx][1][0].username !== obj[1]) {
              serverChanges[obj[0]] = [
                { id: serverEntries[idx][1][0].id, username: obj[1] },
              ];
            }
          } else {
            serverChanges[obj[0]] = obj[1];
          }
        }
      }
    }
  });

  serverChanges.socials = {};
  socialsEntries.forEach((o, idx) => {
    if (serverEntries[4][1][idx]?.username !== o[1].username) {
      if (serverEntries[4][1][idx]?.id) {
        serverChanges[`socials`][o[0]] = {
          id: serverEntries[4][1][idx].id,
          username: o[1].username,
        };
      } else {
        serverChanges[`socials`][o[0]] = o[1];
      }
    }
  });

  const socialsLength = { ...serverChanges.socials };
  if (Object.keys(socialsLength).length === 0) delete serverChanges[`socials`];

  if (Object.keys(serverChanges).length === 0) return null;

  return serverChanges;
};
