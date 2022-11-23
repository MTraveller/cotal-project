import React from 'react';

export const Input = ({
  id,
  name,
  type,
  dataValue,
  value,
  autoComplete,
  display,
  width,
  padding,
  borderRadius,
  bgStyles,
  borderStyles,
  textColor,
  placeHolderColor,
  placeholder,
  onChange,
  onBlur,
}) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      data-name={dataValue}
      value={value ? value : ``}
      autoComplete={autoComplete}
      required
      className={`relative ${display ? display : `flex`} ${
        width ? width : `w-full`
      } appearance-none ${padding} ${
        bgStyles ? bgStyles : `bg-slate-200 dark:bg-slate-500`
      } ${borderStyles ? borderStyles : `border-slate-400`} ${
        textColor ? textColor : `text-slate-900 dark:text-slate-300`
      } ${borderRadius} border ${
        placeHolderColor
          ? placeHolderColor
          : `placeholder-slate-900 dark:placeholder-slate-300`
      } focus:z-10 focus:border-transparent focus:outline-none focus:ring-inset focus:ring-1 focus:ring-yellow-300 text-sm sm:text-base`}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};
