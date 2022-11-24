import React from 'react';

import { OneSection } from '../layout/template/private-route/OneSection';
import { PersonalSetting } from './user-setting/PersonalSetting';
import Seo from '../Seo';

// Future feature due to deadline approaching
const UserSetting = ({ userData }) => (
  <>
    <Seo title="Settings" />

    <p className="mb-4 text-stone-600/70 text-xs text-center">
      Due to deadline approacking this feature is not set up, with more time,
      sure would be functional.
    </p>

    <OneSection
      title="Settings"
      userData={userData}
      component={PersonalSetting}
    />
  </>
);

export const Head = () => <Seo title="User Settings" />;

export default UserSetting;
