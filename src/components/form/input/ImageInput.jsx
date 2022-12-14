import React from 'react';

export const ImageInput = ({ id, onChange }) => (
  <input
    className="hidden"
    id={id}
    name="image"
    type="file"
    accept="image/*"
    onChange={onChange}
  />
);
