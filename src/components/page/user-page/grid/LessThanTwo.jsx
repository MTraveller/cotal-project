import React from 'react';
import { Link } from 'gatsby';

import { Image } from '../../../layout/element/Image';

export const LessThanTwo = ({ data, model, user, colorTop, colorBottom }) =>
  data[model].length > 0 ? (
    <section className="w-full mb-6">
      <h2 className="mb-8 text-2xl text-stone-600/80 capitalize">
        {`${model}s`}
      </h2>

      {data[model].map((obj) => {
        return (
          <Link
            key={obj.title}
            to={`/in/${user}/${model}/${obj.slug}/`}
            alt={obj.title}
          >
            <h2
              className={`px-2 bt-2 pb-0 ${colorTop} rounded-none rounded-t-md`}
            >
              {obj.title.length > 24
                ? `${obj.title.substring(0, 24)}...`
                : obj.title}
            </h2>
            {obj.image ? (
              <figure>
                <Image
                  image={obj.image}
                  addedModelName={model}
                  slug={user}
                  alt={obj.title}
                />
              </figure>
            ) : (
              ``
            )}
            <span
              className={`inline-block w-full px-2 pt-1 pb-1 text-xs ${colorBottom} rounded-none rounded-b-md`}
            >
              {new Date(obj.created_on).toDateString()}
            </span>
          </Link>
        );
      })}
    </section>
  ) : (
    ``
  );
