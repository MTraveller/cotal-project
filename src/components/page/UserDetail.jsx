import React from 'react';

import { TwoSection } from '../layout/template/private-route/TwoSection';
import { PersonalDetail } from './user-detail/PersonalDetail';
import { PublicDetail } from './user-detail/PublicDetail';
import Seo from '../Seo';

const UserDetail = ({ userData }) => (
  <TwoSection
    title="Your Profile"
    userData={userData}
    leftStyles="w-full sm:flex-initial sm:w-80 sm:max-w-80"
    rightStyles="flex-auto w-[590px] lg:max-w-[1200px]"
    componentLeft={PersonalDetail}
    componentRight={PublicDetail}
  />
);

export const Head = () => <Seo title="Profile" />;

export default UserDetail;
