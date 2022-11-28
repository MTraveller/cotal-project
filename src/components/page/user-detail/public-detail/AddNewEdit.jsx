import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import getUserDataHandler from '../../../../services/userData';
import postDataHandler from '../../../../services/postData';
import {
  checkEquality,
  displayLoader,
  getUser,
} from '../../../export/personalDetail';
import { ButtonLabelInput } from '../../../form/input/ButtonLabelInput';
import { UploadSvg } from '../../../form/input/UploadSvg';
import { Post } from './add-new/Post';
import { ProfileModel } from './add-new/ProfileModel';
import { FormButton } from '../../../form/FormButton';

export const AddNewEdit = ({
  userSlug,
  setActive,
  model,
  object,
  setTargetName,
  setObject,
}) => {
  const [form, setForm] = useState({
    image: undefined,
    title: ``,
    description: ``,
    link: ``,
  });

  const [isObject, setIsObject] = useState(null);
  const [objectDB, setObjectDB] = useState(null);
  const [tag, setTag] = useState([]);
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (object) setIsObject(true);

    if (isObject && !objectDB) {
      if (userSlug) {
        const objectModel = model.toLowerCase();
        let trail = ``;
        if (objectModel === `post`) {
          trail = `/posts/profiles/${userSlug}/${objectModel}s/${object}/`;
        } else {
          trail = `/profiles/${userSlug}/${objectModel}s/${object}/`;
        }
        getUserDataHandler(trail, getUser().access)
          .then((res) => {
            return setObjectDB({ ...res.data, tags: res.data.tags[0] });
          })
          .catch((ex) => {
            return ex;
          });
      }
    }

    if (objectDB) {
      setForm({
        id: objectDB.id,
        image: objectDB.image,
        title: objectDB.title,
        [model === `Post` ? `post` : `description`]:
          model === `Post` ? objectDB.post : objectDB.description,
      });

      setPreview(objectDB.image);
    }
  }, [object, isObject, userSlug, model, objectDB]);

  const handleClickBack = () => {
    setActive(false);
    setTargetName(null);
    setObject(null);
  };

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const objectUrl = URL.createObjectURL(e.target.files[0]);
    setPreview(objectUrl);

    setForm({
      ...form,
      image: e.target.files[0],
    });

    return () => URL.revokeObjectURL(objectUrl);
  };

  const handleChange = ({ currentTarget: input }) => {
    setForm({ ...form, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.dismiss();

    const button = e.currentTarget;

    let formCopy = { ...form };

    if (tag.length) formCopy[`tag`] = tag;
    if (formCopy.image === undefined) delete formCopy.image;
    if (button.id === `Post` || !formCopy.link) delete formCopy.link;

    formCopy[`content`] = true;

    const result = checkEquality(formCopy, objectDB);

    if (result) {
      displayLoader(e);

      const isPost = model === `Post` ? true : false;
      const contentBodyName = isPost ? `post` : `description`;

      if (!result.title) result[`title`] = form.title;
      if (!result.contentBodyName)
        result[contentBodyName] = isPost ? form.post : form.description;
      if (object) result[`slug`] = object;

      const response = await postDataHandler([
        model,
        userSlug,
        result,
        getUser().access,
        isPost,
        contentBodyName,
      ]);

      if (response === true) {
        toast.success(`Saved successfully`);
        setIsObject(null);
        setObjectDB(null);
      } else {
        response[0].length > 1
          ? response[0] === `image`
            ? toast.warn(response[1])
            : toast.warn(response[0])
          : toast.warn(response[0][0]);
      }
      displayLoader(`${model.toLowerCase()}-submit`);
      button.parentNode.parentNode.parentNode.firstChild.lastChild.click();
    } else {
      toast(`It works, but no input no output ;)`);
    }

    return null;
  };

  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex flex-row justify-between items-center">
        <h2>Add {model}</h2>
        <button type="button" onClick={handleClickBack}>
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
                onClick={() => (
                  setForm({ ...form, image: undefined }), setPreview(undefined)
                )}
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
              tagArray={tag}
              setTag={setTag}
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
            id={`${model.toLowerCase()}-submit`}
            extraStyles="mt-5 py-2"
            handleSubmit={handleSubmit}
            buttonText="Submit"
          />
        </form>
      </div>
    </div>
  );
};
