import React from 'react';
import Loader from '../Loader';

export const FormButton = ({ id, extraStyles, handleSubmit, buttonText }) => (
  <button
    id={id ? id : `form-submit`}
    type="submit"
    className={`fancy-button ${extraStyles}`}
    data-message="Save changes made"
    onClick={handleSubmit}
  >
    <span className="hidden">
      <span className="flex flex-row justify-center items-center italic">
        <Loader styles="w-4 h-4 mr-3" />
        Processing...
      </span>
    </span>
    <span>{buttonText}</span>
  </button>
);
