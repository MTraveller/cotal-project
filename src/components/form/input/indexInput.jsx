import React from 'react';

export const IndexFormInput = ({
  id,
  name,
  type,
  value,
  borderRadius,
  placeholder,
  onChange,
}) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      required
      className={`relative block w-full appearance-none ${borderRadius} border border-slate-400 bg-slate-500 px-3 py-3 md:py-4 text-white placeholder-white focus:z-10 focus:border-yellow-300 focus:outline-none focus:ring-yellow-300 sm:text-sm`}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
