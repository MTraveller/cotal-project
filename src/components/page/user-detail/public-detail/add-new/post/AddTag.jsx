import React from 'react';

export const AddTag = ({ handleClick }) => {
  return (
    <div className="w-1/6 flex flex-row justify-around">
      <button
        id="remove-tag"
        type="button"
        className="w-8 h-8 rounded-full dark:bg-pink-900 hover:dark:bg-pink-800 dark:text-slate-400 text-center"
        onClick={handleClick}
      >
        <span className="font-bold">-1</span>
      </button>
      <button
        id="add-tag"
        type="button"
        className="w-8 h-8 rounded-full dark:bg-lime-900 hover:dark:bg-lime-800 dark:text-slate-400 text-center"
        onClick={handleClick}
      >
        <span className="font-bold">+1</span>
      </button>
    </div>
  );
};
