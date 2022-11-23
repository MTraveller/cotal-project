import React from 'react';

import { slugify } from '../../../../utils/slugify';
import { ButtonStyles } from '../../../export/personalDetail';
import { Image } from '../../../layout/element/Image';

export const Card = ({
  model,
  modelName,
  userSlug,
  setModelDB,
  setObject,
  contentType,
  handleObjectEdit,
}) => {
  const handleClick = ({ currentTarget: button }) => {
    const dataModel = button.dataset['model'];
    const dbModel = dataModel.substring(0, dataModel.length - 1);
    const title = button.name;
    window.open(`/in/${userSlug}/${dbModel}/${slugify(title)}/`, `_blank`);
  };

  const handleEdit = ({ currentTarget: button }) => {
    if (button) {
      const editButton =
        button.parentNode.parentNode.parentNode.parentNode.firstChild.lastChild;

      const target = { target: editButton };

      setObject(button.dataset.post);

      handleObjectEdit(target);
    }
  };

  const handleRemove = (e) => {
    const button = e.currentTarget;

    if (e.type === `click`) {
      if (button.innerText !== `Sure?`) {
        button.innerText = `Sure?`;
      } else {
        console.log('Remove post');
        setModelDB(null);
      }
    } else if (e.type === `blur`) button.innerText = `Remove`;
  };

  return model?.length > 0 ? (
    <div className="overflow-x-auto flex flex-row gap-x-10">
      {model?.map((item) => (
        <div key={item.id} id={item.id}>
          <button
            type="button"
            name={item.title}
            className="bg-slate-900 rounded-md mb-3 z-0"
            onClick={handleClick}
            data-hover="false"
            data-model={modelName}
          >
            <span className="w-80 h-72 flex flex-col text-left">
              <span className="flex flex-row justify-between">
                <span className="basis-auto h-12 flex items-center px-4">
                  {item.title.length > 26
                    ? `${item.title.substring(0, 36)}...`
                    : item.title}
                </span>
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
                    {item[contentType].length > 205
                      ? `${item[contentType].substring(0, 205)}...`
                      : item[contentType]}
                  </span>
                )}
              </span>
              <span className="h-8 flex items-center px-4 text-xs">
                {item.link
                  ? item.link
                  : item.slug
                  ? item.slug.length > 34
                    ? `/${item.slug.substring(0, 34)}...`
                    : `/${item.slug}/`
                  : ``}
              </span>
            </span>
          </button>
          <div className="flex flex-row justify-evenly mb-5 p-2">
            <ButtonStyles
              className="w-2/6"
              data-post={item.slug}
              onClick={handleRemove}
              onBlur={handleRemove}
            >
              Remove
            </ButtonStyles>
            <ButtonStyles
              className="w-2/6"
              data-post={item.slug}
              onClick={handleEdit}
            >
              Edit
            </ButtonStyles>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-sm">Nothing here..</p>
  );
};
