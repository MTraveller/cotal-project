import React from 'react';

import { TwoSectionLeft } from '../layout/template/private-route/TwoSectionLeft';
import { NetworkMenu } from './user-network/NetworkMenu';
import { NetworkDetail } from './user-network/NetworkDetail';
import Seo from '../Seo';

const UserNetwork = () => (
  <TwoSectionLeft
    title="My Network"
    leftStyles="flex-1 lg:flex-none lg:max-w-60"
    rightStyles="flex-auto w-[451px] lg:max-w-[1200px]"
    componentLeft={NetworkMenu}
    componentRight={NetworkDetail}
  />
);

export const Head = () => <Seo title="My Network" />;

export default UserNetwork;
