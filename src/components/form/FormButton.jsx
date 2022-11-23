import React from 'react';
import Loader from '../layout/element/loader';

import { ButtonStyles } from '../layout/style/ButtonStyle';

export const FormButton = ({ id, extraStyles, handleSubmit, buttonText }) => (
  <ButtonStyles
    id={id ? id : ``}
    type="submit"
    className={extraStyles}
    data-message="Save changes made"
    onClick={handleSubmit}
  >
    <span id="button-loading" className="hidden">
      <span className="flex flex-row justify-center items-center italic">
        <Loader styles="w-4 h-4 mr-3" />
        Processing...
      </span>
    </span>
    <span id="form-btn">{buttonText}</span>
  </ButtonStyles>
);
