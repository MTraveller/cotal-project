import React from 'react';

import { TwoSectionRight } from '../../components/layout/template/private-route/TwoSectionRight';
import { UserPageDetail } from '../../components/page/user-page/UserPageDetail';
import { SideBar } from '../../components/page/side-bar/two-section/SideBar';
import Seo from '../../components/Seo';

const UserPage = ({ params }) => (
  <TwoSectionRight
    leftStyles="flex-auto w-[460px] lg:max-w-[740px]"
    rightStyles="flex-initial w-full mx-auto sm:w-80"
    componentLeft={UserPageDetail}
    componentRight={SideBar}
    {...params}
  />
);

export default UserPage;
