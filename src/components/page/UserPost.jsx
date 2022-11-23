import React, { useState, useEffect } from 'react';
import { GoCommentDiscussion } from 'react-icons/go';
import { Link } from 'gatsby';

import getUserDataHandler from '../../services/userData';
import { Image } from '../layout/element/Image';
import { ProfileImageSvg } from '../layout/element/ProfileImageSvg';
import { Comment } from './user-post/Comment';
import Loader from '../layout/element/loader';

export const UserPost = (props) => {
  const [pageProps, setPageProps] = useState();
  const [data, setData] = useState(null);
  const [dataPost, setDataPost] = useState();
  const [tag, setTags] = useState();
  const [count, setCount] = useState();
  const [dataPostComments, setDataPostComments] = useState();

  useEffect(() => {
    if (!pageProps) setPageProps(props);

    if (pageProps && !data) {
      const { model, slug } = pageProps;
      const postSlug = pageProps[model];

      getUserDataHandler(
        model === `post`
          ? `/posts/profiles/${slug}/${model}s/${postSlug}/`
          : `/profiles/${slug}/${model}s/${postSlug}/`,
        `pass`
      )
        .then((res) => {
          setDataPost(
            res.data[model === `post` ? `post` : `description`].split(`\r\n`)
          );

          setTags(res.data.tags);
          setCount(res.data.comment_count);
          setDataPostComments(res.data.postcomments);

          setData({
            id: res.data.id,
            profile: {
              user: res.data.profile.user,
              image: res.data.profile.image,
            },
            image: res.data.image,
            title: res.data.title,
            link: res.data.link,
            createdOn: res.data.created_on,
          });
        })
        .catch((ex) => {
          return ex;
        });
    }
  }, [props, pageProps, data]);

  return (
    <div className="bg-black/[.2] rounded-lg">
      {data ? (
        <div className="flex flex-col gap-y-5">
          <div
            className={`flex flex-row pt-6 px-6 ${
              dataPostComments ? `justify-between` : `justify-start`
            } items-center`}
          >
            <div className="flex flex-col gap-y-2 items-center">
              <div className="flex flex-row gap-x-3 items-center">
                {data?.profile.image ? (
                  <figure className="w-20 h-20 flex items-center">
                    <img
                      className="rounded-full"
                      src={data?.profile.image}
                      alt=""
                    />
                  </figure>
                ) : (
                  <ProfileImageSvg widthHeight="w-10 h-10" />
                )}
                <Link
                  to={`/in/${pageProps?.slug}/`}
                  className="flex flex-row gap-x-1"
                >
                  <span>{data?.profile.user.first_name}</span>
                  <span>{data?.profile.user.last_name}</span>
                </Link>
              </div>
              <div className="text-xs italic">
                <span>
                  Posted on: {new Date(data?.createdOn).toDateString()}
                </span>
              </div>
            </div>
            {dataPostComments ? (
              <div className="flex flex-row self-end items-center gap-x-3">
                <GoCommentDiscussion />
                <span className="text-xs">
                  {count === 1 ? `${count} comments` : `${count} comments`}
                </span>
              </div>
            ) : (
              ``
            )}
          </div>
          <Image
            image={data.image}
            addedModelName={pageProps.model}
            slug={pageProps.slug}
            alt={`${data.title}`}
          />
          <h1 className="p-6 text-2xl">{data.title}</h1>
          <div className="px-6 italic">
            {data.link ? (
              <a
                href={data.link}
                title={data.link}
                target="_blank"
                rel="noreferrer noopener"
              >
                {data.link}
              </a>
            ) : (
              ``
            )}
          </div>
          <div className="px-6 pb-6">
            {dataPost.map((string, idx) =>
              string !== `` ? <p key={idx}>{string}</p> : <br key={idx} />
            )}
          </div>
          {dataPostComments ? (
            <>
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
                  <div key={data?.id} className="flex flex-row gap-x-5">
                    <div className="flex flex-row gap-x-3">
                      {data.profile.image ? (
                        <figure className="w-20 h-20 flex items-center">
                          <img
                            className="rounded-full"
                            src={data.profile.image}
                            alt=""
                          />
                        </figure>
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
            </>
          ) : (
            ``
          )}
        </div>
      ) : (
        <div className="h-24 flex items-center">
          <Loader styles="w-10 h-10 mx-auto" />
        </div>
      )}
    </div>
  );
};
