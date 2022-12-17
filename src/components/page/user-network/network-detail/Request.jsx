import React, { useState, useEffect } from 'react';

import getUserDataHandler from '../../../../services/userData';
import { getUser } from '../../../../services/authService';
import { countRequest } from '../../../../utils/countRequest';
import postDataHandler from '../../../../services/postData';
import { Image } from '../../../layout/element/Image';
import { OpenLinkExternal } from '../../../layout/element/OpenLinkExternal';
import { ProfileImageSvg } from '../../../layout/element/ProfileImageSvg';
import Loader from '../../../Loader';

export const Request = ({ userData }) => {
  const [data, setData] = useState();
  const [requestCount, setRequestCount] = useState(0);

  useEffect(() => {
    if (userData?.slug && !data) {
      getUserDataHandler(
        `/profiles/${userData.slug}/connecting/`,
        getUser().access
      )
        .then((res) => {
          return setData(res.data);
        })
        .catch((ex) => {
          return ex;
        });
    }

    if (data && !requestCount)
      setRequestCount(countRequest(data, requestCount));
  }, [data, userData?.slug, requestCount]);

  const handleClick = ({ target: button }) => {
    const choice =
      button.id === `connect` ? 1 : button.id === `ignore` ? 0 : ``;

    const idx = button.dataset.idx;
    const clickedObj = data[idx];

    const newObj = { ...clickedObj, connecting_choice: choice.toString() };

    data[idx] = newObj;

    setRequestCount(parseInt(requestCount - 1));

    postDataHandler(`connect`, newObj);
  };

  return data ? (
    <div className="flex flex-col gap-y-8">
      {requestCount !== 0 ? (
        data?.map((connect, idx) =>
          connect.connecting_choice === `0` ||
          connect.connecting_choice === `1` ? (
            ``
          ) : connect.connecter_username !== userData.slug ? (
            <div
              key={connect.id}
              className="flex flex-row items-center gap-x-2 sm:gap-x-5"
            >
              <div className="flex flex-row basis-1/2 items-center gap-x-1">
                {connect.opposite_user?.image ? (
                  <Image
                    image={connect.opposite_user.image}
                    addedModelName="profile"
                    userSlug={connect.opposite_user.slug}
                    alt={`${connect.opposite_user.firstname} ${connect.opposite_user.lastname} profile image`}
                  />
                ) : (
                  <ProfileImageSvg widthHeight="w-10 h-10" />
                )}
                <OpenLinkExternal
                  url={`/in/${connect.opposite_user.slug}/`}
                  buttonText={`${connect.opposite_user.firstname} ${connect.opposite_user.lastname}`}
                />
              </div>
              <button
                id="ignore"
                className="basis-1/3 py-2 fancy-button"
                data-obj-id={connect.id}
                data-idx={idx}
                onClick={handleClick}
              >
                Ignore
              </button>
              <button
                id="connect"
                className="basis-1/3 py-2 fancy-button"
                data-obj-id={connect.id}
                data-idx={idx}
                onClick={handleClick}
              >
                Connect
              </button>
            </div>
          ) : (
            <div
              key={connect.id}
              className="flex flex-row items-center gap-x-5"
            >
              <div className="flex flex-row basis-1/2 items-center gap-x-1">
                {connect.opposite_user?.image ? (
                  <Image
                    image={connect.opposite_user.image}
                    addedModelName="profile"
                    slug={connect.opposite_user.slug}
                    alt={`${connect.opposite_user.firstname} ${connect.opposite_user.lastname} profile image`}
                  />
                ) : (
                  <ProfileImageSvg widthHeight="w-10 h-10" />
                )}
                <OpenLinkExternal
                  url={`/in/${connect.opposite_user.slug}/`}
                  buttonText={`${connect.opposite_user.firstname} ${connect.opposite_user.lastname}`}
                />
              </div>
              <span className="hidden sm:block basis-1/3" />
              <button
                id="delete"
                className="basis-1/2 sm:basis-1/3 py-2 fancy-button"
                data-obj-id={connect.id}
                data-idx={idx}
                onClick={handleClick}
              >
                Delete request
              </button>
            </div>
          )
        )
      ) : (
        <p>You've got no requests</p>
      )}
    </div>
  ) : (
    <Loader styles="w-10 h-10 mx-auto" />
  );
};
