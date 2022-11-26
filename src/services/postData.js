import {
  userProfileHandler,
  userSocialHandler,
  userLinktreesHandler,
  userConnectHandler,
  userPostContentHander,
  userCommentHandler,
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

        console.log(response);
        if (response !== true) error = [...response];
      }
    }
  } else if (req[0] === `connect`) {
    const response = await userConnectHandler({
      user: req[1],
      data: req[2],
      token: req[3],
    });

    if (response !== true) error = [...response];
  } else if (
    [`Post`, `Portfolio`, `Award`, `Certificate`, `Creative`].includes(req[0])
  ) {
    const response = await userPostContentHander({
      model: req[0],
      user: req[1],
      data: req[2],
      token: req[3],
      isPost: req[4],
      type: req[5],
    });

    if (response !== true) error = [...response];
  } else if (req[0] === `comment`) {
    const response = await userCommentHandler({
      user: req[1],
      slug: req[2],
      token: req[3],
      data: req[4],
    });

    if (response !== true) return response;
  }

  if (error.length) return error;
  console.log(error);
  return true;
}
