import React from 'react';

import { TwoSectionLeft } from '../layout/template/private-route/TwoSectionLeft';
import { PersonalDetail } from './user-detail/PersonalDetail';
import { PublicDetail } from './user-detail/PublicDetail';

const UserDetail = () => (
  <>
    <TwoSectionLeft
      title="Your Profile"
      leftStyles="w-full sm:flex-initial sm:w-80 sm:max-w-80"
      rightStyles="w-full flex-auto sm:w-[590px] lg:max-w-[1200px]"
      componentLeft={PersonalDetail}
      componentRight={PublicDetail}
    />
  </>
);

export default UserDetail;
