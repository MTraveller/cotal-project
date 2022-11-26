import React, { useState } from 'react';

import postDataHandler from '../../../services/postData';
import { getUser } from '../../export/personalDetail';
import { Textarea } from '../../form/input/Textarea';
import { FormButton } from '../../form/FormButton';
import { toast } from 'react-toastify';

export const Comment = ({ slug, post, setData }) => {
  const [form, setForm] = useState({
    comment: ``,
  });

  const handleChange = ({ currentTarget: input }) => {
    setForm({ ...form, comment: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.dismiss();

    if (form.comment !== undefined) {
      const response = await postDataHandler([
        `comment`,
        slug,
        post,
        getUser().access,
        form,
      ]);

      if (response === true) {
        setData(null);
        toast.success(`Posted Successfully`);
      } else {
        toast.warn(`${response[0]}: ${response[1]}`);
      }
    } else {
      toast(`It works, but no input no output ;)`);
    }
  };

  return (
    <form className="flex flex-col gap-y-5">
      <Textarea
        id="comment"
        name="comment"
        type="comment"
        value={form.comment}
        autoComplete="off"
        rows="5"
        borderRadius="rounded-md"
        padding="px-3 py-3 md:py-4"
        bgStyles="bg-gray-200/60 border-gray-400 dark:bg-slate-400/40 dark:border-slate-300/70"
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
