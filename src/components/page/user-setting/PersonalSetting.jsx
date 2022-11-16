import React, { useState } from 'react';

import { FormButton } from '../../form/FormButton';

export const PersonalSetting = () => {
  const [check, setCheck] = useState({
    activity: 1,
  });

  const handleChange = () =>
    setCheck({ activity: check.activity === 1 ? 0 : 1 });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log([check]);
  };

  return (
    <div className="mx-auto">
      <form className="flex flex-col w-80 gap-10">
        {/* Initial checkbox input sourced from: https://flowbite.com/docs/forms/toggle/ */}
        <div className="flex flex-row justify-between items-center gap-5">
          <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
            Show Activity
          </span>
          <label className="inline-flex relative items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onChange={handleChange}
              checked={check.activity === 1 ? true : false}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
        <FormButton buttonText="Save" handleSubmit={handleSubmit} />
      </form>
    </div>
  );
};
