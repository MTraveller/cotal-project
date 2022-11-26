import React from 'react';

import { useUserDataContext } from '../../../context/UserDataContext';
import { Network } from './network-detail/Network';
import { Request } from './network-detail/Request';

export const NetworkDetail = ({ menu }) => {
  const { userData } = useUserDataContext();

  return (
    <div className="bg-gray-400/10 dark:bg-black/[.2] rounded-lg p-6">
      {menu === `request` ? (
        <Request userData={userData} />
      ) : (
        <Network userData={userData} />
      )}
    </div>
  );
};
