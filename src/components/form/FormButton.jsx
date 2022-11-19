import React from 'react';

import { ButtonStyles } from '../layout/style/ButtonStyle';

export const FormButton = ({ extraStyles, handleSubmit, buttonText }) => (
  <ButtonStyles
    type="submit"
    className={extraStyles}
    data-message="Save changes made"
    onClick={handleSubmit}
  >
    {buttonText}
  </ButtonStyles>
);
