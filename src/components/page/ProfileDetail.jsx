import * as React from 'react';

import { TwoSection } from '../layout/template/TwoSection';
import { PersonalDetails } from './profile-detail/PersonalDetails';
import { PublicDetails } from './profile-detail/PublicDetails';
import Seo from '../Seo';

const ProfileDetail = ({ userData }) => {
  console.log(userData);

  return (
    <TwoSection
      title="Your Profile"
      userData={userData}
      componentLeft={PersonalDetails}
      componentRight={PublicDetails}
    />
  );
};

export const Head = () => <Seo title="Profile" />;

export default ProfileDetail;
