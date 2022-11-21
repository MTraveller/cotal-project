import { Link } from 'gatsby';
import React, { useState, useEffect } from 'react';

import getUserDataHandler from '../../services/userData';
import { Image } from '../layout/element/Image';
import Loader from '../layout/element/loader';
import { ProfileImageSvg } from '../layout/element/ProfileImageSvg';

export const UserPost = ({ post, slug }) => {
  const [data, setData] = useState();
  const [dataPost, setDataPost] = useState();

  useEffect(() => {
    if (slug && !data) {
      getUserDataHandler(`/posts/profiles/${slug}/posts/${post}/`, `pass`)
        .then((res) => {
          setDataPost(res.data.post.split(`\r\n`));
          return setData({
            id: res.data.id,
            profile: {
              user: res.data.profile.user,
              image: res.data.profile.image,
            },
            image: res.data.image,
            title: res.data.title,
            createdOn: res.data.created_on,
            tags: res.data.tags,
            comments: res.data.comments,
          });
        })
        .catch((ex) => {
          return ex;
        });
    }
  }, [slug, data, post]);

  return (
    <div className="bg-black/[.2] rounded-lg">
      {data ? (
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-col gap-y-2 pt-6 px-6">
            <div className="flex flex-row gap-x-3 items-center">
              {data.profile.image ? (
                data.profile.image
              ) : (
                <ProfileImageSvg widthHeight="w-10 h-10" />
              )}
              <Link to={`/in/${slug}/`} className="flex flex-row gap-x-1">
                <span>{data.profile.user.first_name}</span>
                <span>{data.profile.user.last_name}</span>
              </Link>
            </div>
            <div className="text-xs italic">
              <span>Posted on: {new Date(data.createdOn).toDateString()}</span>
            </div>
          </div>
          <Image
            image={data.image}
            addedModelName="post"
            slug={slug}
            alt={`${data.title}`}
          />
          <div className="px-6 pb-6">
            {dataPost.map((string, idx) =>
              string !== `` ? <p key={idx}>{string}</p> : <br />
            )}
          </div>
        </div>
      ) : (
        <Loader styles="w-10 h-10 mx-auto" />
      )}
    </div>
  );
};
