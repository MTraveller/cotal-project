import React from 'react';

export const Textarea = ({
  id,
  name,
  type,
  dataValue,
  value,
  autoComplete,
  rows,
  display,
  width,
  padding,
  bgStyles,
  borderStyles,
  textColor,
  borderRadius,
  placeHolderColor,
  placeholder,
  onChange,
}) => {
  return (
    <textarea
      id={id}
      name={name}
      type={type}
      data-name={dataValue}
      value={value ? value : ``}
      autoComplete={autoComplete}
      required
      rows={rows ? rows : `10`}
      className={`relative ${display ? display : `flex`} ${
        width ? width : `w-full`
      } appearance-none ${padding} ${
        bgStyles ? bgStyles : `bg-gray-200 dark:bg-slate-500`
      } ${
        borderStyles ? borderStyles : `border-gray-400 dark:border-slate-400`
      } ${
        textColor ? textColor : `text-zinc-600 dark:text-slate-300`
      } ${borderRadius} border ${
        placeHolderColor
          ? placeHolderColor
          : `placeholder-zinc-600 dark:placeholder-slate-300`
      } focus:z-10 focus:border-transparent focus:outline-none focus:ring-inset focus:ring-1 focus:ring-sky-500 dark:focus:ring-yellow-300 text-sm sm:text-base`}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
