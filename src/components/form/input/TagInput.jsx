import React, { useEffect, useState } from 'react';

import { Input } from './Input';

export const TagInput = () => {
  const [tagId, setTagId] = useState();
  const [value, setValue] = useState();

  useEffect(() => {
    if (!tagId) setTagId(`tag-${Math.floor(Math.random() * 10000)}`);
  }, [tagId]);

  const handleChange = ({ currentTarget: input }) => {
    console.log(input.value);
    setValue(input.value);
  };

  return (
    <Input
      id={tagId}
      name={tagId}
      type="tag"
      value={value}
      autoComplete="off"
      width="w-1/6"
      padding="px-3 py-2 md:py-2"
      borderRadius="rounded-md"
      bgStyles="dark:bg-slate-800/40 dark:border-slate-800/70"
      textColor="text-slate-500"
      placeHolderColor="placeholder-slate-500"
      placeholder="Add tag.."
      onChange={handleChange}
    />
  );
};
