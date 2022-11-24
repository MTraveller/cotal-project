import React from 'react';

import { ThreeSection } from '../layout/template/private-route/ThreeSection';
import { SideBarLeft } from './side-bar/three-section/SideBarLeft';
import { FeedDetail } from './user-feed/FeedDetail';
import { SideBarRight } from './side-bar/three-section/SideBarRight';

const UserFeed = () => (
  <ThreeSection
    leftStyles="hidden lg:block flex-1 max-w-60"
    middleStyles="flex-auto w-[500px] max-w-[782px]"
    rightStyles="hidden lg:block flex-1 max-w-60"
    componentLeft={SideBarLeft}
    componentMiddle={FeedDetail}
    componentRight={SideBarRight}
  />
);

export default UserFeed;
