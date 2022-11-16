import React from 'react';

import { Image } from '../../../layout/element/Image';

export const Card = ({ model, modelName, userSlug }) => {
  return model?.length > 0 ? (
    <div className="overflow-x-auto flex flex-row gap-x-10">
      {model?.map((item) => (
        <div key={item.id} className="bg-slate-900 rounded-md mb-4">
          <div className="flex flex-col w-80">
            <h2 className="py-2 px-4">{item.title}</h2>
            <figure>
              <Image
                image={item.image}
                modelName={modelName}
                userSlug={userSlug}
              />
              <figcaption className="relative flex items-center -mt-8 px-4 py-2 rounded-b-md bg-slate-900 text-sm">
                {item.link}
              </figcaption>
            </figure>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-sm">Nothing here..</p>
  );
};
