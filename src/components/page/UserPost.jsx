import React, { useState, useEffect } from 'react';
import { GoCommentDiscussion } from 'react-icons/go';
import { Link } from 'gatsby';

import getUserDataHandler from '../../services/userData';
import { Image } from '../layout/element/Image';
import { ProfileImageSvg } from '../layout/element/ProfileImageSvg';
import { Comment } from './user-post/Comment';
import Loader from '../layout/element/loader';

export const UserPost = ({ post, slug }) => {
  const [data, setData] = useState();
  const [dataPost, setDataPost] = useState();
  const [dataPostComments, setDataPostComments] = useState();

  useEffect(() => {
    if (slug && !data) {
      getUserDataHandler(`/posts/profiles/${slug}/posts/${post}/`, `pass`)
        .then((res) => {
          setDataPost(res.data.post.split(`\r\n`));
          setDataPostComments(res.data.postcomments);
          return setData({
            id: res.data.id,
            profile: {
              user: res.data.profile.user,
              image: res.data.profile.image,
            },
            image: res.data.image,
            title: res.data.title,
            count: res.data.comment_count,
            createdOn: res.data.created_on,
            tags: res.data.tags,
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
          <div className="flex flex-row pt-6 px-6 justify-between items-center">
            <div className="flex flex-col gap-y-2">
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
                <span>
                  Posted on: {new Date(data.createdOn).toDateString()}
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center gap-x-2">
              <GoCommentDiscussion />
              <span>{data.count}</span>
            </div>
          </div>
          <Image
            image={data.image}
            addedModelName="post"
            slug={slug}
            alt={`${data.title}`}
          />
          <h1 className="p-6 text-2xl">{data.title}</h1>
          <div className="px-6 pb-6">
            {dataPost.map((string, idx) =>
              string !== `` ? <p key={idx}>{string}</p> : <br />
            )}
          </div>
          <div className="border-y border-slate-400/30 mb-6">
            <div className="py-4 px-6">
              <div className="h-0 invisible flex flex-row justify-around">
                <button className="text-sm transition active:scale-75 active:text-lime-500 ease-in-out duration-75">
                  Like
                </button>
                <button className="text-sm transition active:scale-75 active:text-lime-500 ease-in-out duration-75">
                  Comment
                </button>
              </div>
              <div className="flex flex-row justify-end">
                <button className="text-sm transition active:scale-75 active:text-lime-500 ease-in-out duration-75">
                  Back
                </button>
              </div>
            </div>
            <div className="group px-6 pb-6">
              <Comment />
            </div>
          </div>
          <div className="flex flex-col px-6 pb-6 gap-y-8">
            {dataPostComments.map((data) => (
              <div key={data.id} className="flex flex-row gap-x-5">
                <div className="flex flex-row gap-x-3">
                  {data.profile.image ? (
                    data.profile.image
                  ) : (
                    <ProfileImageSvg widthHeight="w-10 h-10" />
                  )}
                </div>
                <div className="flex flex-col gap-y-3">
                  <div className="flex flex-col gap-0">
                    <Link
                      to={`/in/${data.profile.slug}/`}
                      className="flex flex-row gap-x-1"
                    >
                      <span>{data.profile.user.first_name}</span>
                      <span>{data.profile.user.last_name}</span>
                    </Link>
                    <span className="text-slate-900/40 dark:text-slate-400/40 text-xs italic">
                      Posted on: {new Date(data.created_on).toDateString()}
                    </span>
                  </div>
                  <div>{data.comment}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Loader styles="w-10 h-10 mx-auto" />
      )}
    </div>
  );
};
