import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { allUserDataHandler } from '../../../services/userData';
import { ServerError } from '../../ServerError';
import NotFoundPage from '../../../pages/404';
import { Image } from '../../layout/element/Image';
import { ProfileImageSvg } from '../../export/personalDetail';
import { socialIcon } from '../../layout/element/socialIcons';
import { LessThanTwo } from './grid/LessThanTwo';
import { LessThanThree } from './grid/LessThanThree';
import { MoreThanTwo } from './grid/MoreThanTwo';
import Loader from '../../layout/element/loader';

const IconDivStyles = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0 10%;
  margin-top: 0.5rem;
`;

export const UserPageDetail = ({ user }) => {
  const [error, setError] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!data) {
      async function fetchData() {
        return await allUserDataHandler(user).then((res) => {
          if (res?.profile?.id) {
            setData(res);
          } else if (res.profile === `error`) {
            setError(true);
          } else if (res.response?.status === 404) {
            setNotFound(true);
          }
        });
      }
      fetchData();
    }
  }, [data, user]);

  return error ? (
    <ServerError />
  ) : notFound ? (
    <NotFoundPage />
  ) : data ? (
    <>
      <div className="bg-gray-400/10 dark:bg-black/[.2] rounded-lg p-6">
        <div className="flex flex-row flex-wrap justify-between items-center">
          <figure className="absolute w-28 h-28 sm:relative top-[200px] sm:top-auto right-8 sm:right-auto sm:w-1/2 sm:h-auto">
            {data.profile.image ? (
              <Image
                image={data.profile.image}
                addedModelName="profile"
                slug={data.profile.slug}
                className="rounded-full w-28 h-28 mx-auto"
                alt={`${data.profile.user.first_name} ${data.profile.user.last_name}`}
              />
            ) : (
              <ProfileImageSvg widthHeight="max-w-32 max-h-32 mx-auto" />
            )}
          </figure>
          <div className="w-full sm:w-1/2 flex flex-col gap-y-2">
            <h1 className="text-3xl capitalize">
              {data.profile.user.first_name}
              {` `}
              {data.profile.user.last_name}
            </h1>
            <span>Status: {data.profile.status}</span>
            {data.profile.location ? (
              <span>Location: {data.profile.location}</span>
            ) : (
              ``
            )}
            {data.profile.linktrees[0]?.username ? (
              <span>
                Linktree:{' '}
                <a
                  href={`https://linktr.ee/${data.profile.linktrees[0].username}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >{`@${data.profile.linktrees[0].username}`}</a>
              </span>
            ) : (
              ``
            )}
            <IconDivStyles>
              {socialIcon.map((obj) => {
                const o = data.profile.socials.filter((item) =>
                  obj.name === item.name ? item.username : false
                )[0];

                return obj.name === o?.name ? (
                  <a
                    key={obj.name}
                    href={`${obj.url}/${o?.username}`}
                    target="_target"
                    rel="noreferrer noopener"
                  >
                    {obj.component}
                  </a>
                ) : (
                  ``
                );
              })}
            </IconDivStyles>
          </div>
        </div>
        <div className="grid mt-16 gap-y-14 text-white">
          {data.post.length < 2 ? (
            <LessThanTwo
              data={data}
              model="post"
              user={user}
              colorTop="bg-lime-500 dark:bg-lime-700/50"
              colorBottom="bg-blue-500 dark:bg-blue-700/50"
            />
          ) : data.post.length === 2 ? (
            <LessThanThree
              data={data}
              model="post"
              user={user}
              colorTop="bg-lime-500 dark:bg-lime-700/50"
              colorBottom="bg-blue-500 dark:bg-blue-700/50"
            />
          ) : (
            <MoreThanTwo
              data={data}
              model="post"
              user={user}
              colorTop="bg-lime-500 dark:bg-lime-700/50"
              colorBottom="bg-blue-500 dark:bg-blue-700/50"
            />
          )}
          {data.creative.length < 2 ? (
            <LessThanTwo
              data={data}
              model="creative"
              user={user}
              colorTop="bg-violet-500 dark:bg-violet-700/50"
              colorBottom="bg-pink-500 dark:bg-pink-700/50"
            />
          ) : data.creative.length === 2 ? (
            <LessThanThree
              data={data}
              model="creative"
              user={user}
              colorTop="bg-violet-500 dark:bg-violet-700/50"
              colorBottom="bg-pink-500 dark:bg-pink-700/50"
            />
          ) : (
            <MoreThanTwo
              data={data}
              model="creative"
              user={user}
              colorTop="bg-violet-700 dark:bg-violet-700/50"
              colorBottom="bg-pink-700 dark:bg-pink-700/50"
            />
          )}
          {data.portfolio.length < 2 ? (
            <LessThanTwo
              data={data}
              model="portfolio"
              user={user}
              colorTop="bg-fuchsia-700 dark:bg-fuchsia-700/50"
              colorBottom="bg-sky-700 dark:bg-sky-700/50"
            />
          ) : data.portfolio.length === 2 ? (
            <LessThanThree
              data={data}
              model="portfolio"
              user={user}
              colorTop="bg-fuchsia-700 dark:bg-fuchsia-700/50"
              colorBottom="bg-sky-700 dark:bg-sky-700/50"
            />
          ) : (
            <MoreThanTwo
              data={data}
              model="portfolio"
              user={user}
              colorTop="bg-fuchsia-700 dark:bg-fuchsia-700/50"
              colorBottom="bg-sky-700 dark:bg-sky-700/50"
            />
          )}
          {data.award.length < 2 ? (
            <LessThanTwo
              data={data}
              model="award"
              user={user}
              colorTop="bg-orange-700 dark:bg-orange-700/50"
              colorBottom="bg-emerald-700 dark:bg-emerald-700/50"
            />
          ) : data.award.length === 2 ? (
            <LessThanThree
              data={data}
              model="award"
              user={user}
              colorTop="bg-orange-700 dark:bg-orange-700/50"
              colorBottom="bg-emerald-700 dark:bg-emerald-700/50"
            />
          ) : (
            <MoreThanTwo
              data={data}
              model="award"
              user={user}
              colorTop="bg-orange-700 dark:bg-orange-700/50"
              colorBottom="bg-emerald-700 dark:bg-emerald-700/50"
            />
          )}
          {data.certificate.length < 2 ? (
            <LessThanTwo
              data={data}
              model="certificate"
              user={user}
              colorTop="bg-cyan-700 dark:bg-cyan-700/50"
              colorBottom="bg-zinc-700 dark:bg-zinc-700/50"
            />
          ) : data.certificate.length === 2 ? (
            <LessThanThree
              data={data}
              model="certificate"
              user={user}
              colorTop="bg-cyan-700 dark:bg-cyan-700/50"
              colorBottom="bg-zinc-700 dark:bg-zinc-700/50"
            />
          ) : (
            <MoreThanTwo
              data={data}
              model="certificate"
              user={user}
              colorTop="bg-cyan-700 dark:bg-cyan-700/50"
              colorBottom="bg-zinc-700 dark:bg-zinc-700/50"
            />
          )}
        </div>
      </div>
    </>
  ) : (
    <Loader styles="w-10 h-10 mx-auto" />
  );
};
