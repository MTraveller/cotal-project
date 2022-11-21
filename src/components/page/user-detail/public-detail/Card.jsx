import React from 'react';

import { slugify } from '../../../../utils/slugify';
import { Image } from '../../../layout/element/Image';

export const Card = ({ model, modelName, userSlug }) => {
  const handleClick = ({ currentTarget }) => {
    const title = currentTarget.name;
    window.open(`/in/${userSlug}/${slugify(title)}/`, `_blank`);
  };

  return model?.length > 0 ? (
    <div className="overflow-x-auto flex flex-row gap-x-10">
      {model?.map((item) => (
        <button
          key={item.id}
          type="button"
          name={item.title}
          className="bg-slate-900 rounded-md mb-5"
          onClick={handleClick}
        >
          <span className="w-80 h-72 flex flex-col text-left">
            <span className="h-12 flex items-center px-4">
              {item.title.length > 34
                ? `${item.title.substring(0, 34)}...`
                : item.title}
            </span>
            <span className="w-full h-56 overflow-y-hidden">
              {item.image ? (
                <Image
                  image={item.image}
                  modelName={modelName}
                  slug={userSlug}
                  alt={item.title}
                />
              ) : (
                <span className="h-52 flex items-center px-4 bg-black/50">
                  {item.post.length > 205
                    ? `${item.post.substring(0, 205)}...`
                    : item.post}
                </span>
              )}
            </span>
            <span className="h-8 flex items-center px-4 text-xs">
              {item.link
                ? item.link
                : item.slug.length > 34
                ? `/${item.slug.substring(0, 34)}...`
                : `/${item.slug}/`}
            </span>
          </span>
        </button>
      ))}
    </div>
  ) : (
    <p className="text-sm">Nothing here..</p>
  );
};
