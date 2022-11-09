import React from 'react';

import { TwoSection } from '../layout/template/private-route/TwoSection';
import { NetworkMenu } from './user-network/NetworkMenu';
import { NetworkDetail } from './user-network/NetworkDetail';
import Seo from '../Seo';

const UserNetwork = ({ userData }) => (
  <TwoSection
    title="My Network"
    userData={userData}
    leftStyles="flex-1 lg:flex-none lg:max-w-60"
    rightStyles="flex-auto w-[451px] lg:max-w-[1200px]"
    componentLeft={NetworkMenu}
    componentRight={NetworkDetail}
  />
);

export const Head = () => <Seo title="My Network" />;

export default UserNetwork;
