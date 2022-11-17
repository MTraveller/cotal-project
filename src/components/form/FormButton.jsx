import React from 'react';

import { ButtonStyles } from '../layout/style/ButtonStyle';

export const FormButton = ({ handleSubmit, buttonText }) => (
  <ButtonStyles
    type="submit"
    data-message="Save changes made"
    onClick={handleSubmit}
  >
    {buttonText}
  </ButtonStyles>
);
