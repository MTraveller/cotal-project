import React from 'react';

export const TopLoginRegisterInput = ({ id, name, type, placeholder }) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      required
      className="relative block w-full appearance-none rounded-none rounded-t-md border border-slate-500 bg-slate-500 px-3 py-3 md:py-4 text-white placeholder-white focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      placeholder={placeholder}
    />
  );
};
