import React, { useState, useEffect } from 'react';
import { GoCommentDiscussion } from 'react-icons/go';
import { Link } from 'gatsby';

import { isLoggedIn } from '../../services/authService';
import getUserDataHandler from '../../services/userData';
import { Image } from '../layout/element/Image';
import { ProfileImageSvg } from '../layout/element/ProfileImageSvg';
import { Comment } from './user-post/Comment';
import Loader from '../layout/element/loader';
import NotFoundPage from '../../pages/404';

export const UserPost = (props) => {
  const isAuthorized = isLoggedIn();

  const [notFound, setNotFound] = useState(false);
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
      ).then((res) => {
        if (res?.status) {
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
        } else {
          setNotFound(true);
        }
      });
    }
  }, [props, pageProps, data]);

  const handleComment = ({ currentTarget: button }) => {
    const comment = button.parentNode.parentNode.nextSibling;
    const isHeight = comment.classList.contains(`max-h-80`);

    comment.classList.toggle(`pb-6`);

    if (!isHeight) {
      button.innerText = `Close`;
      comment.classList.replace(`max-h-0`, `max-h-80`);
      comment.classList.replace(`invisible`, `visible`);
    } else {
      button.innerText = `Comment`;
      comment.classList.replace(`max-h-80`, `max-h-0`);
      comment.classList.replace(`visible`, `invisible`);
    }
  };

  return notFound ? (
    <NotFoundPage />
  ) : (
    <>
      <div className="bg-gray-400/10 dark:bg-black/[.2] rounded-lg">
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
                        src={data?.profile.image}
                        className="rounded-full"
                        alt={`${data.profile.user.first_name} ${data.profile.user.last_name} profile avatar`}
                      />
                    </figure>
                  ) : (
                    <ProfileImageSvg widthHeight="w-10 h-10" />
                  )}
                  <Link
                    to={`/in/${pageProps?.slug}/`}
                    className="flex flex-row gap-x-1 capitalize font-semibold"
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
            {data.link ? (
              <div className="px-6 italic">
                <a
                  href={data.link}
                  title={data.link}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {data.link}
                </a>
              </div>
            ) : (
              ``
            )}
            <div className="px-6 pb-6">
              {dataPost.map((string, idx) =>
                string !== `` ? <p key={idx}>{string}</p> : <br key={idx} />
              )}
            </div>
            {dataPostComments ? (
              <>
                {isAuthorized ? (
                  <div className="h-auto border-y border-slate-400/30 mb-6">
                    <div className="px-6">
                      <div className="py-4">
                        <div className="flex flex-row">
                          {/* Like button not set up */}
                          <button
                            title="Not set up!"
                            className="w-1/2 text-sm transition active:scale-75 active:text-lime-500 ease-in-out duration-75"
                            onClick={() => alert(`Like button not set up!`)}
                          >
                            Like
                          </button>
                          <button
                            className="w-1/2 text-sm transition active:scale-75 active:text-lime-500 ease-in-out duration-75"
                            onClick={handleComment}
                          >
                            Comment
                          </button>
                        </div>
                      </div>
                      <div className="px-1 max-h-0 invisible transition-all duration-700 overflow-y-hidden">
                        <Comment setData={setData} {...props} />
                      </div>
                    </div>
                  </div>
                ) : (
                  ``
                )}
                <div className="flex flex-col px-6 pb-6 gap-y-8">
                  {dataPostComments.map((item) => (
                    <div key={item?.id} className="flex flex-row gap-x-5">
                      <div className="sm:w-1/5 flex flex-row sm:justify-end gap-x-3">
                        {item.profile.image ? (
                          <figure className="w-12 h-12 flex items-center">
                            <Image
                              image={item.profile.image}
                              addedModelName="profile"
                              slug={item.profile.slug}
                              className="rounded-full"
                              alt={`${item.profile.user.first_name} ${item.profile.user.last_name} profile avatar`}
                            />
                          </figure>
                        ) : (
                          <ProfileImageSvg widthHeight="w-10 h-10" />
                        )}
                      </div>
                      <div className="sm:w-4/5 flex flex-col gap-y-3">
                        <div className="flex flex-col gap-0">
                          <Link
                            to={`/in/${item.profile.slug}/`}
                            className="flex flex-row gap-x-1"
                          >
                            <span>{item.profile.user.first_name}</span>
                            <span>{item.profile.user.last_name}</span>
                          </Link>
                          <span className="text-zinc-600/40 dark:text-slate-400/40 text-xs italic">
                            Posted on:{' '}
                            {new Date(item.created_on).toDateString()}
                          </span>
                        </div>
                        <div>{item.comment}</div>
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
    </>
  );
};
