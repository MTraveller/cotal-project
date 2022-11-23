import React, { useState } from 'react';

import { Input } from '../../../../form/input/Input';
import { TagInput } from '../../../../form/input/TagInput';
import { Textarea } from '../../../../form/input/Textarea';
import { AddTag } from './post/AddTag';

export const Post = ({ form, handleChange, tagArray, setTag }) => {
  const [tagCount, setTagCount] = useState([1]);

  const handleClick = ({ currentTarget: button }) => {
    if (button.id === `add-tag`) {
      setTagCount([...tagCount, tagCount.length + 1]);
    } else if (button.id === `remove-tag`) {
      const newCount = [...tagCount];
      newCount.pop();
      setTagCount(newCount);
    }
  };

  return (
    <>
      <div className="mb-5">
        <label htmlFor="title" className="sr-only">
          Title
        </label>
        <Input
          id="title"
          name="title"
          type="text"
          value={form.title}
          autoComplete="off"
          borderRadius="rounded-md"
          padding="px-3 py-3 md:py-4"
          bgStyles="dark:bg-slate-400/40 dark:border-slate-300/70"
          borderStyles="border-slate-400/40 dark:border-slate-400/70"
          placeholder="Title"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="post-body" className="sr-only">
          Post
        </label>
        <Textarea
          id="post-body"
          name="post"
          type="text"
          value={form.post}
          autoComplete="off"
          borderRadius="rounded-md"
          padding="px-3 py-3 md:py-4"
          bgStyles="dark:bg-slate-400/40 dark:border-slate-300/70"
          placeholder="Post .."
          onChange={handleChange}
        />
        <div className="w-full flex flex-wrap items-center gap-2 sm:gap-y-4 sm:gap-x-3 my-5">
          {tagCount.map((idx) => (
            <TagInput key={idx} tagArray={tagArray} setTag={setTag} />
          ))}
          <AddTag handleClick={handleClick} />
        </div>
      </div>
    </>
  );
};
