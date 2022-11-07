import React from 'react';

import { TwoSection } from '../layout/template/TwoSection';
import { NetworkMenu } from './user-network/NetworkMenu';
import { NetworkDetail } from './user-network/NetworkDetail';
import Seo from '../Seo';

const UserNetwork = ({ userData }) => (
  <TwoSection
    title="My Network"
    userData={userData}
    leftStyles="lg:basis-80"
    rightStyles="lg:basis-auto"
    componentLeft={NetworkMenu}
    componentRight={NetworkDetail}
  />
);

export const Head = () => <Seo title="My Network" />;

export default UserNetwork;
