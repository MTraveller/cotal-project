import React from 'react';

import { ThreeSection } from '../../../../components/layout/template/private-route/ThreeSection';
import { SideBarLeft } from '../../../../components/page/side-bar/three-section/SideBarLeft';
import { UserPost } from '../../../../components/page/UserPost';
import { SideBarRight } from '../../../../components/page/side-bar/three-section/SideBarRight';

export default function Post({ params }) {
  return (
    <ThreeSection
      leftStyles="hidden lg:block flex-1 max-w-60"
      middleStyles="flex-auto w-[500px] max-w-[782px]"
      rightStyles="hidden lg:block flex-1 max-w-60"
      componentLeft={SideBarLeft}
      componentMiddle={UserPost}
      componentRight={SideBarRight}
      params={params}
      model="certificate"
    />
  );
}
