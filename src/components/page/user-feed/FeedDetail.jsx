import React, { useState, useEffect } from 'react';
import { GoCommentDiscussion } from 'react-icons/go';
import { Link } from 'gatsby';

import { getUser } from '../../../services/authService';
import getFeedDataHandler from '../../../services/feedData';
import { ProfileImageSvg } from '../../export/personalDetail';
import { Image } from '../../layout/element/Image';
import Loader from '../../layout/element/loader';

import Seo from '../../Seo';

export const FeedDetail = () => {
  const [feed, setFeed] = useState(null);
  const [page, setPage] = useState();
  const [goToPage, setGoToPage] = useState(false);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    const token = getUser().access;
    if (goToPage) window.scrollTo(0, 0);

    if (!feed?.count || goToPage) {
      getFeedDataHandler(page, token).then((res) => {
        if (res.status === 200) setFeed(res.data);
      });
      setGoToPage(false);
    }
  }, [goToPage, page]);

  const handlePage = ({ currentTarget: button }) => {
    const goTo = button.innerText === `Next` ? feed.next : feed.previous;
    const count = +goTo?.at(-1);

    if (button.innerText === `Next`) {
      if (count) setPageCount(pageCount + 1);
    } else {
      if (count) {
        setPageCount(pageCount - 1);
      } else if (!count && pageCount !== 1) setPageCount(pageCount - 1);
    }

    if (goTo) {
      setPage(goTo);
      setGoToPage(true);
    }
  };

  return (
    <>
      <div className="bg-gray-400/10 dark:bg-black/[.2] rounded-lg p-6">
        {feed ? (
          <div className="flex flex-col gap-y-16">
            {feed.results?.map((obj) => (
              <Link
                key={obj.id}
                to={`/in/${obj.profile.slug}/post/${obj.slug}/`}
                className="flex flex-col gap-y-2 bg-gradient-to-r from-blue-800 to-slate-900/60 dark:from-blue-900 dark:to-cyan-500/60 rounded-md drop-shadow-md cursor-alias"
              >
                <div className="flex flex-row gap-x-2 just items-center px-2 pt-2 text-neutral-100/70 font-extrabold tracking-wide">
                  <figure className="w-1/6">
                    {obj.profile.image ? (
                      <Image
                        image={obj.profile.image}
                        addedModelName="profile"
                        slug={obj.profile.slug}
                        className="rounded-full w-10 h-10"
                        alt={`${obj.profile.user.first_name} ${obj.profile.user.last_name} avatar`}
                      />
                    ) : (
                      <ProfileImageSvg widthHeight="w-10 h-10" />
                    )}
                  </figure>
                  <div className="w-full flex flex-col gap-y-0">
                    <h2 className="text-base sm:text-xl">
                      {obj.title.length > 24
                        ? `${obj.title.substring(0, 24)}...`
                        : obj.title}
                    </h2>
                    <div className="flex flex-row justify-between">
                      <span className="basis-3/4 opacity-60 text-xs italic dark:text-slate-400">
                        {obj.profile.slug}
                      </span>
                      {obj.comment_count ? (
                        <div className="basis-1/4 flex flex-row self-end justify-end items-center gap-x-3">
                          <GoCommentDiscussion />
                          <span className="w-auto text-xs">
                            {obj.comment_count}
                            <span className="hidden sm:inline">
                              {obj.comment_count === 1
                                ? `${` `}comment`
                                : `${` `}comments`}
                            </span>
                          </span>
                        </div>
                      ) : (
                        ``
                      )}
                    </div>
                  </div>
                </div>
                {obj.image ? (
                  <figure>
                    <Image
                      image={obj.image}
                      addedModelName="post"
                      slug={obj.profile.slug}
                      className="rounded-none rounded-b-md"
                      alt={`Post Image ${obj.title}`}
                    />
                  </figure>
                ) : (
                  <div className="px-4 py-2 bg-slate-900 text-slate-400 rounded-none rounded-b-md">
                    <p className="text-base sm:text-lg">
                      {obj.post.length > 48
                        ? `${obj.post.substring(0, 48)}...`
                        : obj.post}
                    </p>
                  </div>
                )}
              </Link>
            ))}
            <div className="flex flex-row justify-between items-center">
              <div>
                <span>Page {pageCount}</span>
              </div>
              <div className="flex flex-row gap-8">
                <button
                  className="w-12 py-1.5 fancy-button"
                  onClick={handlePage}
                >
                  Prev
                </button>
                <button
                  className="w-12 py-1.5 fancy-button"
                  onClick={handlePage}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        ) : (
          <Loader styles="w-10 h-10 mx-auto" />
        )}
      </div>
    </>
  );
};

export function Head() {
  return <Seo title="Feed" />;
}
