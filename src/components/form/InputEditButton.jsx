import React from 'react';

export const InputEditButton = ({ handleEditSaveFlip, dataMsg }) => (
  <button type="button" data-message={dataMsg} onClick={handleEditSaveFlip}>
    Edit
  </button>
);
