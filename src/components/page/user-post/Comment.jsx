import React, { useState } from 'react';

import { Textarea } from '../../form/input/Textarea';
import { FormButton } from '../../form/FormButton';

export const Comment = () => {
  const [form, setForm] = useState({
    comment: ``,
  });

  const handleChange = ({ currentTarget: input }) => {
    console.log(input.value);
    setForm({ ...form, comment: input.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { currentTarget: form } = e;
    console.log('Submitting');
  };

  return (
    <form className="flex flex-col gap-y-5">
      <Textarea
        id="comment"
        name="comment"
        type="comment"
        value={form.comment}
        autoComplete="off"
        borderRadius="rounded-md"
        padding="px-3 py-3 md:py-4"
        bgStyles="dark:bg-slate-400/40 dark:border-slate-300/70"
        placeholder="Comment .."
        onChange={handleChange}
      />
      <FormButton
        extraStyles="py-2"
        handleSubmit={handleSubmit}
        buttonText="Save Changes"
      />
    </form>
  );
};
