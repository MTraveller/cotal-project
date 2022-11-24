import React, { useState } from 'react';

import { TwoSectionLeft } from '../layout/template/private-route/TwoSectionLeft';
import { NetworkMenu } from './user-network/NetworkMenu';
import { NetworkDetail } from './user-network/NetworkDetail';
import Seo from '../Seo';

const UserNetwork = () => {
  const [menu, setMenu] = useState('request');

  return (
    <>
      <Seo title={menu} />

      <p className="text-stone-600/70 text-xs text-center">
        Due to deadline approacking this feature is not handling http.post
        request to the backend, with more time, sure would be functional.
      </p>

      <TwoSectionLeft
        leftStyles="flex-initial w-full mx-auto sm:w-80"
        rightStyles="flex-auto w-[460px] lg:max-w-[740px]"
        componentLeft={NetworkMenu}
        componentRight={NetworkDetail}
        menu={menu}
        setMenu={setMenu}
      />
    </>
  );
};

export const Head = () => <Seo title="My Network" />;

export default UserNetwork;
