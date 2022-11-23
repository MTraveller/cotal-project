import React, { useEffect, useState } from 'react';

import getUserDataHandler from '../../../../services/userData';
import { getUser } from '../../../../services/authService';
import { Card } from './Card';
import Loader from '../../../layout/element/loader';

export const Model = ({ userSlug, model, setObject, handleObjectEdit }) => {
  const [slug, setSlug] = useState();
  const [modelDB, setModelDB] = useState(null);
  const [contentType, setContentType] = useState();

  useEffect(() => {
    if (!slug) {
      setSlug(userSlug);
    }
    if (slug) {
      let trail = ``;

      if (model === `posts`) {
        trail = `/posts/profiles/${slug}/${model}/`;
        setContentType(`post`);
      } else {
        trail = `/profiles/${slug}/${model}/`;
        setContentType(`description`);
      }

      if (!modelDB) {
        getUserDataHandler(trail, getUser().access)
          .then((res) => {
            return setModelDB(res.data);
          })
          .catch((ex) => {
            return ex;
          });
      }
    }
  }, [slug, userSlug, model, modelDB]);

  return slug ? (
    <Card
      model={modelDB}
      modelName={model}
      userSlug={slug}
      setModelDB={setModelDB}
      setObject={setObject}
      contentType={contentType}
      handleObjectEdit={handleObjectEdit}
    />
  ) : (
    <Loader styles="w-10 h-10 mx-auto" />
  );
};
