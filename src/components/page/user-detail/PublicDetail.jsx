import React, { useState } from 'react';

import { useUserDataContext } from '../../../context/UserDataContext';
import { AddNew } from './public-detail/AddNew';
import { Model } from './public-detail/Model';

export const PublicDetail = () => {
  const { userData } = useUserDataContext();

  const [active, setActive] = useState(false);
  const [targetName, setTargetName] = useState();

  const handleClick = ({ target }) => {
    const parentDiv = target.parentNode.parentNode.parentNode;

    parentDiv.classList.add(`hidden`);

    const model = target.previousSibling.innerText.slice(5, -1);

    setTargetName(model);
    setActive(true);
  };

  return (
    <div className="bg-black/[.2] rounded-lg p-6">
      {active ? (
        <AddNew
          userSlug={userData?.slug}
          setActive={setActive}
          model={targetName}
        />
      ) : (
        <div className="flex flex-col gap-y-10">
          <div>
            <div className="flex flex-row mb-3 justify-between items-center text-sm">
              <h2>Your Posts</h2>
              <button type="button" onClick={handleClick}>
                Add new
              </button>
            </div>
            <Model userSlug={userData?.slug} model="posts" />
          </div>
          <div>
            <div className="flex flex-row mb-3 justify-between items-center text-sm">
              <h2>Your Portfolios</h2>
              <button type="button" onClick={handleClick}>
                Add new
              </button>
            </div>
            <Model userSlug={userData?.slug} model="portfolios" />
          </div>
          <div>
            <div className="flex flex-row mb-3 justify-between items-center text-sm">
              <h2>Your Awards</h2>
              <button type="button" onClick={handleClick}>
                Add new
              </button>
            </div>
            <Model userSlug={userData?.slug} model="awards" />
          </div>
          <div>
            <div className="flex flex-row mb-3 justify-between items-center text-sm">
              <h2>Your Certificates</h2>
              <button type="button" onClick={handleClick}>
                Add new
              </button>
            </div>
            <Model userSlug={userData?.slug} model="certificates" />
          </div>
          <div>
            <div className="flex flex-row mb-3 justify-between items-center text-sm">
              <h2>Your Creatives</h2>
              <button type="button" onClick={handleClick}>
                Add new
              </button>
            </div>
            <Model userSlug={userData?.slug} model="creatives" />
          </div>
        </div>
      )}
    </div>
  );
};
