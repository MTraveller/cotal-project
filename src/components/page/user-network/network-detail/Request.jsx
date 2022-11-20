import React, { useState, useEffect } from 'react';

import getUserDataHandler from '../../../../services/userData';
import { getUser } from '../../../../services/authService';
import { countRequest } from '../../../../utils/countRequest';
import postDataHandler from '../../../../services/postData';
import { Image } from '../../../layout/element/Image';
import { OpenLinkExternal } from '../../../layout/element/OpenLinkExternal';
import { ButtonStyles } from '../../../layout/style/ButtonStyle';
import { ProfileImageSvg } from '../../../layout/element/ProfileImageSvg';
import Loader from '../../../layout/element/loader';

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
          ) : (
            <div
              key={connect.id}
              className="flex flex-row items-center gap-x-5"
            >
              <div className="flex flex-row basis-1/2 gap-x-3">
                {connect.connecter_image ? (
                  <Image
                    image={connect.connecter_image}
                    addedModelName="profile"
                    userSlug={connect.connecter_username}
                    alt={`${connect.connecter_name.firstname} ${connect.connecter_name.lastname} profile image`}
                  />
                ) : (
                  <ProfileImageSvg widthHeight="w-10 h-10" />
                )}
                <OpenLinkExternal
                  url={`/in/${connect.connecter_username}/`}
                  buttonText={`${connect.connecter_name.firstname} ${connect.connecter_name.lastname}`}
                />
              </div>
              <ButtonStyles
                id="ignore"
                className="basis-1/3 py-2"
                data-obj-id={connect.id}
                data-idx={idx}
                onClick={handleClick}
              >
                Ignore
              </ButtonStyles>
              <ButtonStyles
                id="connect"
                className="basis-1/3 py-2"
                data-obj-id={connect.id}
                data-idx={idx}
                onClick={handleClick}
              >
                Connect
              </ButtonStyles>
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
