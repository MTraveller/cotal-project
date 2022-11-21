import React, { useState, useEffect } from 'react';

import getUserDataHandler from '../../../../services/userData';
import { getUser } from '../../../../services/authService';
import { countNetwork } from '../../../../utils/countNetwork';
import postDataHandler from '../../../../services/postData';
import { Image } from '../../../layout/element/Image';
import { OpenLinkExternal } from '../../../layout/element/OpenLinkExternal';
import { ButtonStyles } from '../../../layout/style/ButtonStyle';
import { ProfileImageSvg } from '../../../layout/element/ProfileImageSvg';
import Loader from '../../../layout/element/loader';

export const Network = ({ userData }) => {
  const [data, setData] = useState();
  const [networkCount, setNetworkCount] = useState(0);

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

    if (data && !networkCount)
      setNetworkCount(countNetwork(data, networkCount));
  }, [data, userData?.slug, networkCount]);

  const handleClick = ({ target: button }) => {
    const idx = button.dataset.idx;

    const obj = { ...data[idx] };
    delete data[idx];

    setNetworkCount(parseInt(networkCount - 1));

    postDataHandler(`connect`, obj);
  };

  return data ? (
    <div className="flex flex-col gap-y-8">
      {networkCount !== 0 ? (
        data?.map((connect, idx) =>
          connect.connecter_choice === `1` &&
          connect.connecting_choice === `1` ? (
            <div
              key={connect.id}
              className="flex flex-row items-center gap-x-5"
            >
              <div className="flex flex-row basis-2/3 gap-x-3">
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
              <ButtonStyles
                id="remove"
                className="basis-1/3 py-2"
                data-obj-id={connect.id}
                data-idx={idx}
                onClick={handleClick}
              >
                Remove
              </ButtonStyles>
            </div>
          ) : (
            ``
          )
        )
      ) : (
        <p>You've got no connections</p>
      )}
    </div>
  ) : (
    <Loader styles="w-10 h-10 mx-auto" />
  );
};
