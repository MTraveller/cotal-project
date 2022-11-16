import React from 'react';

import { Image } from '../../../layout/element/Image';

export const Card = ({ model, modelName, userSlug }) => {
  // https://github.com/30-seconds/30-seconds-of-code/blob/master/snippets/slugify.md
  const slugify = (title) =>
    title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');

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
          className="bg-slate-900 rounded-md mb-4"
          onClick={handleClick}
        >
          <span className="flex flex-col w-80 text-left">
            <span className="py-2 px-4">{item.title}</span>
            <Image
              image={item.image}
              modelName={modelName}
              userSlug={userSlug}
              alt={item.title}
            />
            <span className="relative flex items-center -mt-8 px-4 py-2 rounded-b-md bg-slate-900 text-sm">
              {item.link}
            </span>
          </span>
        </button>
      ))}
    </div>
  ) : (
    <p className="text-sm">Nothing here..</p>
  );
};
