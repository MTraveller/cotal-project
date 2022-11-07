import React from 'react';

import { TwoSection } from '../layout/template/TwoSection';
import { PersonalDetail } from './user-detail/PersonalDetail';
import { PublicDetail } from './user-detail/PublicDetail';
import Seo from '../Seo';

const UserDetail = ({ userData }) => (
  <TwoSection
    title="Your Profile"
    userData={userData}
    leftStyles="lg:basis-60"
    rightStyles="lg:basis-auto"
    componentLeft={PersonalDetail}
    componentRight={PublicDetail}
  />
);

export const Head = () => <Seo title="Profile" />;

export default UserDetail;
