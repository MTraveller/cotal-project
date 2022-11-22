import {
  userProfileHandler,
  userSocialHandler,
  userLinktreesHandler,
  userConnectHandler,
} from './userPostHandler';

export default async function postDataHandler(req) {
  let error = [];

  if (req[0] === `personal`) {
    if (req[2] !== undefined) {
      if (req[2].socials) {
        const response = await userSocialHandler({
          user: req[1],
          data: req[2].socials,
          token: req[3],
        });

        if (response !== true) error = [...response];
      }

      if (req[2].linktrees) {
        const response = await userLinktreesHandler({
          user: req[1],
          data: req[2].linktrees,
          token: req[3],
        });

        if (response !== true) error = [...response];
      }

      delete req[2].socials;
      delete req[2].linktrees;

      if (Object.keys(req[2]).length > 0) {
        const response = await userProfileHandler({
          data: req[2],
          token: req[3],
        });

        if (response !== true) error = [...response];
      }
    }
  } else if (req[0] === `connect`) {
    const response = await userConnectHandler({ data: req[1], token: req[3] });

    if (response !== true) error = [...response];
  }

  if (error.length !== 0) return error;
  return true;
}
