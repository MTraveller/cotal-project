import React from 'react';

export const ImageInput = ({ id, onChange }) => (
  <input
    className="hidden"
    id={id}
    type="file"
    accept="image/*"
    name="image"
    onChange={onChange}
  />
);
