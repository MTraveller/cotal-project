import React from 'react';

export const FormButton = ({ handleSubmit, buttonText }) => (
  <button
    type="submit"
    data-message="Save changes made"
    className="mt-3 py-2 dark:bg-slate-900 rounded-md ring-1 dark:ring-slate-400 transition ease-in-out delay-150 hover:ring-1 hover:dark:ring-yellow-400 hover:ring-offset-4 hover:ring-offset-gray-900"
    onClick={handleSubmit}
  >
    {buttonText}
  </button>
);
