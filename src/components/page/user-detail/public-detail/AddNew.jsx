import React, { useEffect, useState } from 'react';

import { ButtonLabelInput } from '../../../form/input/ButtonLabelInput';
import { UploadSvg } from '../../../form/input/UploadSvg';
import { ProfileModel } from './add-new/ProfileModel';
import { FormButton } from '../../../form/FormButton';
import { Post } from './add-new/Post';

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

  // "add_tags": ["django"]

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
          <div className="flex flex-row justify-around items-center mb-4">
            {preview ? (
              <img src={preview} width="50%" alt="preview" />
            ) : (
              <p className="basis-1/2 text-sm sm:text-base">
                Preview will be shown here.
              </p>
            )}
            <div className="flex flex-col basis-1/2 place-items-end gap-y-2 text-sm sm:text-base">
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
                Remove
              </button>
            </div>
          </div>
          {model === `Post` ? (
            <Post
              preview={preview}
              onSelectFile={onSelectFile}
              form={form}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          ) : (
            <ProfileModel
              preview={preview}
              onSelectFile={onSelectFile}
              form={form}
              setForm={setForm}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          )}
          <FormButton
            extraStyles="mt-5 py-2"
            handleSubmit={handleSubmit}
            buttonText="Submit"
          />
        </form>
      </div>
    </div>
  );
};
