import React, { useEffect, useState } from 'react';

import { useUserDataContext } from '../../../../context/UserDataContext';
import getUserDataHandler from '../../../../services/userData';
import { getUser } from '../../../../services/authService';
import { Card } from './Card';
import Loader from '../../../layout/element/loader';

export const Model = ({ model }) => {
  const { userData } = useUserDataContext();

  const [data, setData] = useState();
  const [modelDB, setModelDB] = useState();

  useEffect(() => {
    if (!data) {
      setData(userData);
    }
    if (data) {
      let trail = ``;

      if (model === `posts`) {
        trail = `/posts/profiles/${data.slug}/${model}/`;
      } else {
        trail = `/profiles/${data.slug}/${model}/`;
      }

      getUserDataHandler(trail, getUser().access)
        .then((res) => {
          return setModelDB(res.data);
        })
        .catch((ex) => {
          return ex;
        });
    }
  }, [userData, data, model]);

  return data ? (
    <Card model={modelDB} modelName={model} userSlug={data?.slug} />
  ) : (
    <Loader styles="w-10 h-10 mx-auto" />
  );
};
