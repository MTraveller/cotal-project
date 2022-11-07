import React from 'react';
// import { Link } from 'gatsby';
import tw from 'tailwind-styled-components';

import SideBarLeft from './sidebar/SideBarLeft';
import SideBarRight from './sidebar/SideBarRight';
import Seo from '../Seo';
import { useUserDataContext } from '../../context/UserDataContext';

const PageWrapper = tw.div`
  flex
  flex-row
  flex-wrap
  justify-center
  gap-6
`;

const Feed = () => {
  const { userData } = useUserDataContext();

  console.log(userData);

  return (
    <PageWrapper>
      <SideBarLeft />
      <div className="flex-auto w-[500px] max-w-3xl bg-black/[.2] rounded-md">
        <h1>Feed Page</h1>
        <p>
          This feed page is for the user <code>hello</code> on the DRF db.
        </p>
      </div>
      <SideBarRight />
    </PageWrapper>
  );
};

export const Head = () => <Seo title="Feed" />;

export default Feed;
