import React, { useState, useEffect } from 'react';
import SelectInput from '../../form/input/profile/StatusInput';

import { handleEditSaveFlip } from '../../../utils/handleEditSaveFlip';
import { ButtonImageInput } from '../../form/input/ButtonImageInput';
import { ButtonLabelInput } from '../../form/input/ButtonLabelInput';
import { FlipTwo } from '../../layout/element/FlipTwo';
import { SocialInput } from '../../form/input/profile/SocialInput';

export const PersonalDetail = ({ userData }) => {
  const [personal, setPersonal] = useState({
    image: ``,
    status: ``,
    location: ``,
    linktrees: ``,
    socials: ``,
  });

  const [preview, setPreview] = useState();

  // Initial displaying selected image sourced from:
  // https://stackoverflow.com/a/57781164
  useEffect(() => {
    if (userData && personal.status === ``) {
      setPersonal({
        image: userData?.image,
        status: userData?.status,
        location: userData?.location,
        linktrees: userData?.linktrees[0]?.username,
        socials: userData?.socials,
      });
    }

    if (!personal.image) {
      return setPreview(undefined);
    }

    if (!userData?.image) {
      const objectUrl = URL.createObjectURL(personal.image);
      setPreview(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [userData, personal.image, personal.status]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) return;

    return setPersonal({ ...personal, image: e.target.files[0] });
  };

  const handleChange = ({ currentTarget: input }) => {
    setPersonal({ ...personal, [input.name]: input.value });
  };

  const handleStatusSelect = (e) => setPersonal({ ...personal, status: e });

  return (
    <div className="bg-black/[.2] rounded-lg p-6">
      <form className="flex flex-col gap-y-3">
        <div className="flex flex-row justify-between items-center">
          <div className="w-32">
            <ButtonImageInput
              id="label-profile-image"
              preview={preview ? preview : personal?.image}
              alt={`${personal?.user?.first_name} ${personal?.user?.last_name}`}
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-32 h-32"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              }
              onChange={onSelectFile}
            />
          </div>
          <div>
            <ButtonLabelInput
              id="change-profile-image-button"
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                  />
                </svg>
              }
              onChange={onSelectFile}
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="flex h-[47px] sm:h-[42.5px] items-center gap-3">
            Status:{` `}
            <span id="status">{personal.status}</span>
          </p>
          <span id="status" name="status" className="hidden w-3/4">
            <SelectInput
              value={personal.status}
              onChange={handleStatusSelect}
            />
          </span>
          <button type="button" onClick={handleEditSaveFlip}>
            Edit
          </button>
        </div>
        <FlipTwo
          paragraphHight="h-[47px] sm:h-[42.5px]"
          text="Location"
          spanId="status"
          variable={personal.location ? personal.location : ``}
          inputId="location"
          inputName="location"
          inputType="text"
          inputValue={personal.location ? personal.location : ``}
          inputAutocomplete="country-name"
          inputDisplay="block"
          inputBorderRadius="rounded-md"
          inputPadding="py-2 pl-6 pr-10"
          inputPlaceholder="Location"
          onChange={handleChange}
        />
        <FlipTwo
          paragraphHight="h-[47px] sm:h-[42.5px]"
          text="LinkTree"
          link={`https://linktr.ee/${personal.linktrees}`}
          spanId="linktrees"
          variable={personal.linktrees ? personal.linktrees : ``}
          inputId="linktrees"
          inputName="linktrees"
          inputType="text"
          inputValue={personal.linktrees ? personal.linktrees : ``}
          inputAutocomplete="off"
          inputDisplay="block"
          inputBorderRadius="rounded-md"
          inputPadding="py-2 pl-6 pr-10"
          inputPlaceholder="Username"
          onChange={handleChange}
        />
        <SocialInput
          buttonsHight="h-[47px] sm:h-[42.5px]"
          socials={personal.socials ? personal.socials : ``}
          spanId="socials"
          inputId="socials"
          inputName="socials"
          inputType="text"
          inputAutocomplete="off"
          inputDisplay="hidden"
          inputBorderRadius="rounded-md"
          inputPadding="py-2 pl-6 pr-10"
          inputPlaceholder="Username"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};
