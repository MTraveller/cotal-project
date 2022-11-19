import React from 'react';

import { Input } from '../../../../form/input/Input';
import { Textarea } from '../../../../form/input/Textarea';

export const ProfileModel = ({ form, handleChange }) => (
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
        inputDisplay="block"
        borderRadius="rounded-none rounded-t-md"
        padding="px-3 py-3 md:py-4"
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
        inputDisplay="block"
        borderRadius="rounded-none rounded-b-md"
        padding="px-3 py-3 md:py-4"
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
        inputDisplay="block"
        borderRadius="rounded-md"
        padding="px-3 py-3 md:py-4"
        placeholder="Description .."
        onChange={handleChange}
      />
    </div>
  </>
);
