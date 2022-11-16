import React, { useState, useEffect } from 'react';

import { useUserDataContext } from '../../../context/UserDataContext';
import { checkEquality } from '../../../utils/checkEquality';
import postDataHandler from '../../../services/postData';
import { ButtonImageInput } from '../../form/input/ButtonImageInput';
import { ButtonLabelInput } from '../../form/input/ButtonLabelInput';
import { SocialInput } from '../../form/input/profile/SocialInput';
import { ProfileImageSvg } from '../../form/input/profile/ProfileImageSvg';
import { FormButton } from '../../form/FormButton';
import { UploadSvg } from '../../form/input/UploadSvg';
import { OpenLinkExternal } from '../../layout/element/OpenLinkExternal';
import { FlipSelectTwo } from '../../form/input/FlipSelectTwo';
import { FlipTwo } from '../../form/input/FlipTwo';

export const PersonalDetail = () => {
  const { userData } = useUserDataContext();

  const [personal, setPersonal] = useState({
    image: ``,
    status: ``,
    location: ``,
    linktrees: ``,
    socials: ``,
  });

  const [preview, setPreview] = useState();

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

    // Initial displaying selected image sourced from:
    // https://stackoverflow.com/a/57781164
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
    if (input.dataset.name === `socials`) {
      const socialData = personal.socials;

      const socialObj = userData.socials.filter(
        (social) => social.name === input.name
      )[0];

      setPersonal({
        ...personal,
        socials: {
          ...socialData,
          [userData.socials.indexOf(socialObj)]: {
            ...socialObj,
            username: input.value,
          },
        },
      });
    } else {
      setPersonal({ ...personal, [input.name]: input.value });
    }
  };

  const handleStatusSelect = (e) => setPersonal({ ...personal, status: e });

  const handleSubmit = (e) => {
    e.preventDefault();

    const userDataCopy = { ...userData };

    const userId = userDataCopy.id;
    delete userDataCopy.id;
    delete userDataCopy.user;
    delete userDataCopy.slug;

    if (!userDataCopy.linktrees.length && !e.linktrees)
      userDataCopy.linktrees = undefined;

    const result = checkEquality(personal, userDataCopy);

    postDataHandler([`personal`, userId, result]);
  };

  return (
    <div className="bg-black/[.2] rounded-lg p-6">
      <form className="flex flex-col gap-y-2">
        <div className="flex flex-row justify-between items-center">
          <div className="w-32">
            <ButtonImageInput
              id="label-profile-image"
              preview={preview ? preview : personal?.image}
              alt={`${personal?.user?.first_name} ${personal?.user?.last_name}`}
              svg={<ProfileImageSvg widthHeight="w-32 h-32" />}
              onChange={onSelectFile}
            />
          </div>
          <div className="min-w-max flex flex-col place-items-end gap-5">
            <OpenLinkExternal
              url={`/in/${userData?.slug}/`}
              buttonText="View Profile"
            />
            <ButtonLabelInput
              id="change-profile-image-button"
              svg={<UploadSvg widthHeight="w-6 h-6" />}
              text="Add Image"
              onChange={onSelectFile}
            />
          </div>
        </div>
        <FlipSelectTwo
          divHeight="h-[47px]"
          inputText="Status"
          spanId="status"
          inputValue={personal.status}
          onChange={handleStatusSelect}
          dataMsg="Edit your status"
        />
        <FlipTwo
          divHeight="h-[47px]"
          text="Location"
          spanId="location"
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
          dataMsg="Edit your location"
        />
        <FlipTwo
          divHeight="h-[47px]"
          text="LinkTree"
          link={`https://linktr.ee/${personal.linktrees}`}
          spanId="linktrees"
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
          dataMsg="Edit your linktree username"
        />
        <SocialInput
          divHeight="h-[47px]"
          inputId="socials"
          inputType="text"
          inputValue={personal.socials}
          inputAutocomplete="off"
          inputDisplay="hidden"
          inputBorderRadius="rounded-md"
          inputPadding="py-2 pl-6 pr-10"
          inputPlaceholder="Username"
          onChange={handleChange}
        />
        <FormButton handleSubmit={handleSubmit} buttonText="Save Changes" />
      </form>
    </div>
  );
};
