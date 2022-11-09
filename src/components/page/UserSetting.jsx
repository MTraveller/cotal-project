import React from 'react';

import { OneSection } from '../layout/template/private-route/OneSection';
import { PersonalSetting } from './user-setting/PersonalSetting';
import Seo from '../Seo';

const UserSetting = ({ userData }) => (
  <OneSection
    title="Your Settings"
    userData={userData}
    component={PersonalSetting}
  />
);

export const Head = () => <Seo title="User Settings" />;

export default UserSetting;
