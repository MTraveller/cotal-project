import React from 'react';

export const TopLoginRegisterInput = ({ id, name, type, placeholder }) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      required
      className="relative block w-full appearance-none rounded-none rounded-t-md border border-slate-400 bg-slate-500 px-3 py-3 md:py-4 text-white placeholder-white focus:z-10 focus:border-yellow-300 focus:outline-none focus:ring-yellow-300 sm:text-sm"
      placeholder={placeholder}
    />
  );
};

export const MiddleLoginRegisterInput = ({ id, name, type, placeholder }) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      required
      className="relative block w-full appearance-none rounded-none border border-slate-400 bg-slate-500 px-3 py-3 md:py-4 text-white placeholder-white focus:z-10 focus:border-yellow-300 focus:outline-none focus:ring-yellow-300 sm:text-sm"
      placeholder={placeholder}
    />
  );
};

export const BottomLoginRegisterInput = ({ id, name, type, placeholder }) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      required
      className="relative block w-full appearance-none rounded-none rounded-b-md border border-slate-400 bg-slate-500 px-3 py-3 md:py-4 text-white placeholder-white focus:z-10 focus:border-yellow-300 focus:outline-none focus:ring-yellow-300 sm:text-sm"
      placeholder={placeholder}
    />
  );
};

export const NameLoginRegisterInput = ({
  id,
  name,
  type,
  placeholder,
  borderRadius,
}) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      required
      className={`relative block w-full appearance-none rounded-none ${borderRadius} border border-slate-400 bg-slate-500 px-3 py-3 md:py-4 text-white placeholder-white focus:z-10 focus:border-yellow-300 focus:outline-none focus:ring-yellow-300 sm:text-sm`}
      placeholder={placeholder}
    />
  );
};
