import React, { useEffect, useState } from 'react';

import { ButtonLabelInput } from '../../../form/input/ButtonLabelInput';
import { UploadSvg } from '../../../form/input/UploadSvg';
import { Input } from '../../../form/input/Input';

import { FormButton } from '../../../form/FormButton';
import { Textarea } from '../../../form/input/Textarea';

export const AddNew = ({ setActive, model }) => {
  const [form, setForm] = useState({
    image: undefined,
    title: ``,
    description: ``,
    link: ``,
  });

  const [preview, setPreview] = useState();

  useEffect(() => {
    if (!form.image) {
      return setPreview(undefined);
    }

    const objectUrl = URL.createObjectURL(form.image);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [form?.image]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) return;

    return setForm({ ...form, image: e.target.files[0] });
  };

  const handleChange = ({ currentTarget: input }) => {
    setForm({ ...form, [input.name]: input.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex flex-row justify-between items-center">
        <h2>Add {model}</h2>
        <button type="button" onClick={() => setActive(false)}>
          Back
        </button>
      </div>
      <div>
        <form className="flex flex-col">
          <div className="flex flex-row justify-between items-center mb-4">
            {preview ? (
              <img src={preview} width="200px" height="auto" alt="preview" />
            ) : (
              <p className="text-sm">Preview will be shown here.</p>
            )}
            <div className="flex flex-col place-items-center gap-y-3">
              <ButtonLabelInput
                id="add-image-button"
                svg={<UploadSvg widthHeight="w-6 h-6" />}
                text="Add Image"
                onChange={onSelectFile}
              />
              <button
                type="button"
                onClick={() => setForm({ ...form, image: undefined })}
              >
                Remove image!
              </button>
            </div>
          </div>
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
          <FormButton handleSubmit={handleSubmit} buttonText="Submit" />
        </form>
      </div>
    </div>
  );
};
