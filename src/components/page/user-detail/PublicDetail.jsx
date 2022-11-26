import React, { useState } from 'react';

import { useUserDataContext } from '../../../context/UserDataContext';
import { AddNewEdit } from './public-detail/AddNewEdit';
import { Model } from './public-detail/Model';

export const PublicDetail = () => {
  const { userData } = useUserDataContext();

  const [active, setActive] = useState(false);
  const [targetName, setTargetName] = useState(null);
  const [object, setObject] = useState(null);

  const handleClick = ({ target }) => {
    const parentDiv = target.parentNode.parentNode.parentNode;

    parentDiv.classList.add(`hidden`);

    const model = target.previousSibling.innerText.slice(5, -1);

    setTargetName(model);
    setActive(true);
  };

  return (
    <div className="bg-gray-400/10 dark:bg-black/[.2] rounded-lg p-6">
      {active ? (
        <AddNewEdit
          userSlug={userData?.slug}
          setActive={setActive}
          model={targetName}
          object={object}
          setObject={setObject}
          setTargetName={setTargetName}
        />
      ) : (
        <div className="flex flex-col gap-y-10">
          <div id="post">
            <div className="flex flex-row mb-3 justify-between items-center text-sm">
              <h2>Your Posts</h2>
              <button type="button" onClick={handleClick}>
                Add new
              </button>
            </div>
            <Model
              userSlug={userData?.slug}
              model="posts"
              setObject={setObject}
              handleObjectEdit={handleClick}
            />
          </div>
          <div id="postfofio">
            <div className="flex flex-row mb-3 justify-between items-center text-sm">
              <h2>Your Portfolios</h2>
              <button type="button" onClick={handleClick}>
                Add new
              </button>
            </div>
            <Model
              userSlug={userData?.slug}
              model="portfolios"
              setObject={setObject}
              handleObjectEdit={handleClick}
            />
          </div>
          <div id="awards">
            <div className="flex flex-row mb-3 justify-between items-center text-sm">
              <h2>Your Awards</h2>
              <button type="button" onClick={handleClick}>
                Add new
              </button>
            </div>
            <Model
              userSlug={userData?.slug}
              model="awards"
              setObject={setObject}
              handleObjectEdit={handleClick}
            />
          </div>
          <div id="certificate">
            <div className="flex flex-row mb-3 justify-between items-center text-sm">
              <h2>Your Certificates</h2>
              <button type="button" onClick={handleClick}>
                Add new
              </button>
            </div>
            <Model
              userSlug={userData?.slug}
              model="certificates"
              setObject={setObject}
              handleObjectEdit={handleClick}
            />
          </div>
          <div id="creative">
            <div className="flex flex-row mb-3 justify-between items-center text-sm">
              <h2>Your Creatives</h2>
              <button type="button" onClick={handleClick}>
                Add new
              </button>
            </div>
            <Model
              userSlug={userData?.slug}
              model="creatives"
              setObject={setObject}
              handleObjectEdit={handleClick}
            />
          </div>
        </div>
      )}
    </div>
  );
};
