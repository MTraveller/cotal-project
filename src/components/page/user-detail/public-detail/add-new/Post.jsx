import React, { useState } from 'react';

import { Input } from '../../../../form/input/Input';
import { TagInput } from '../../../../form/input/TagInput';
import { Textarea } from '../../../../form/input/Textarea';
import { AddTag } from './post/AddTag';

export const Post = ({ form, handleChange }) => {
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
      <div>
        <label htmlFor="title" className="sr-only">
          Title
        </label>
        <Input
          id="title"
          name="title"
          type="title"
          value={form.title}
          autoComplete="off"
          borderRadius="rounded-none rounded-t-md"
          padding="px-3 py-3 md:py-4"
          bgStyles="dark:bg-slate-400/40 dark:border-slate-300/70"
          borderStyles="border-slate-400/40 dark:border-slate-400/70"
          placeholder="Title"
          onChange={handleChange}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="link" className="sr-only">
          Link
        </label>
        <Input
          id="link"
          name="link"
          type="link"
          value={form.link}
          autoComplete="off"
          borderRadius="rounded-none rounded-b-md"
          padding="px-3 py-3 md:py-4"
          bgStyles="dark:bg-slate-400/40 dark:border-slate-300/70"
          placeholder="Link?"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description" className="sr-only">
          Description
        </label>
        <Textarea
          id="description"
          name="description"
          type="description"
          value={form.description}
          autoComplete="off"
          borderRadius="rounded-md"
          padding="px-3 py-3 md:py-4"
          bgStyles="dark:bg-slate-400/40 dark:border-slate-300/70"
          placeholder="Description .."
          onChange={handleChange}
        />
        <div className="w-full flex flex-wrap items-center gap-y-4 gap-x-3 my-5">
          {tagCount.map((idx) => (
            <TagInput key={idx} onChange={handleChange} />
          ))}
          <AddTag handleClick={handleClick} />
        </div>
      </div>
    </>
  );
};
