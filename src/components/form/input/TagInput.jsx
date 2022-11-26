import React, { useEffect, useState } from 'react';

import { Input } from './Input';

export const TagInput = ({ tagArray, setTag }) => {
  const [tagId, setTagId] = useState();
  const [value, setValue] = useState();

  useEffect(() => {
    if (!tagId) setTagId(`tag-${Math.floor(Math.random() * 10000)}`);
  }, [tagId]);

  const handleChange = ({ currentTarget: input }) => {
    setValue(input.value);
  };

  const handleBlur = ({ currentTarget: input }) => {
    if (input.value.length) {
      let idx = 0;
      const isTag = tagArray.filter((tag, i) => {
        idx = i;
        return tag[0] === input.id;
      });

      console.log(isTag);
      if (!isTag || isTag.length === 0) {
        setTag([...tagArray, [input.id, input.value]]);
      } else {
        const isSame = isTag[1] === input.value ? true : false;

        if (!isSame) {
          const array = [...tagArray];
          const item = array.pop(idx);

          item.splice(1, 1, input.value);
          array.push(item);

          setTag(array);
        }
      }
    }
  };

  return (
    <Input
      id={tagId}
      name={tagId}
      type="tag"
      value={value}
      autoComplete="off"
      width="flex-auto w-[175px] sm:basis-2/6"
      padding="px-3 py-2"
      borderRadius="rounded-md"
      bgStyles="bg-gray-200/80 dark:bg-slate-800/40 dark:border-slate-800/70"
      textColor="text-slate-500"
      placeHolderColor="placeholder-slate-500"
      placeholder="Add tag.."
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};
