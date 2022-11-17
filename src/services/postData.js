import {
  userProfileHandler,
  userSocialHandler,
  userLinktreesHandler,
  userConnectHandler,
} from './userPostHandler';

export default async function postDataHandler(req) {
  if (req[0] === `personal`) {
    const profileLength = Object.keys(req[2]).length;

    if (req[2].socials) await userSocialHandler({ data: req[2].socials });
    if (req[2].linktrees)
      await userLinktreesHandler({ data: req[2].linktrees });

    delete req[2].socials;
    delete req[2].linktrees;

    if (profileLength > 0) await userProfileHandler({ data: req[2] });
  } else if (req[0] === `connect`) await userConnectHandler({ data: req[1] });
}
