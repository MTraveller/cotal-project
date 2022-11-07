import React from 'react';
import tw from 'tailwind-styled-components';

import SideBarLeft from './sidebar/SideBarLeft';
import SideBarRight from './sidebar/SideBarRight';
import Seo from '../Seo';

const PageWrapper = tw.div`
  flex
  flex-row
  flex-wrap
  justify-center
  gap-6
`;

const UserFeed = ({ userData }) => (
  <PageWrapper>
    <SideBarLeft />
    <div className="flex-auto w-[500px] max-w-3xl bg-black/[.2] rounded-md">
      <p>
        This feed page is for the user <code>hello</code> on the DRF db.
      </p>
    </div>
    <SideBarRight />
  </PageWrapper>
);

export const Head = () => <Seo title="Feed" />;

export default UserFeed;
