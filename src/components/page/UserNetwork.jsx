import React from 'react';

import { TwoSectionLeft } from '../layout/template/private-route/TwoSectionLeft';
import { NetworkMenu } from './user-network/NetworkMenu';
import { NetworkDetail } from './user-network/NetworkDetail';
import Seo from '../Seo';

const UserNetwork = () => (
  <TwoSectionLeft
    leftStyles="flex-initial w-full mx-auto sm:w-80"
    rightStyles="flex-auto w-[460px] lg:max-w-[740px]"
    componentLeft={NetworkMenu}
    componentRight={NetworkDetail}
  />
);

export const Head = () => <Seo title="My Network" />;

export default UserNetwork;
