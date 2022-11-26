import React, { useState, useEffect } from 'react';
import { MdMenuOpen } from 'react-icons/md';
import { toast } from 'react-toastify';

import {
  useUserDataContext,
  displayLoader,
  checkEquality,
  ButtonStyles,
  ButtonImageInput,
  ButtonLabelInput,
  SocialInput,
  ProfileImageSvg,
  FormButton,
  UploadSvg,
  OpenLinkExternal,
  FlipSelectTwo,
  FlipTwo,
  getUser,
} from '../../export/personalDetail';
import postDataHandler from '../../../services/postData';
import Loader from '../../layout/element/loader';
import { removeLoader } from '../../layout/element/button/removeLoader';

export const PersonalDetail = () => {
  const { userData, setUserData } = useUserDataContext();

  const [personal, setPersonal] = useState({
    image: ``,
    status: ``,
    location: ``,
    linktrees: ``,
  });

  const [socials, setSocials] = useState({});

  const [preview, setPreview] = useState();

  useEffect(() => {
    if (userData && personal.status === ``) {
      setPersonal({
        image: userData?.image,
        status: userData?.status,
        location: userData?.location,
        linktrees: userData?.linktrees[0]?.username,
      });

      if (Object.keys(socials).length === 0) {
        let socialsObj = {};

        Object.entries(userData.socials).forEach((obj) => {
          socialsObj = {
            ...socialsObj,
            [obj[1].name]: {
              id: obj[1].id,
              username: obj[1].username,
            },
          };
        });

        setSocials(socialsObj);
      }
    }
  }, [userData, socials, personal.status]);

  const handleDivClick = (e) => {
    let current = ``;

    if (e) {
      current = e.currentTarget;
    } else {
      current = document.querySelector(`#profile-details-btn`);
    }

    const parent = current.parentNode;

    const isHeight = parent.classList.contains(`max-h-[550px]`);

    if (!isHeight) {
      parent.classList.replace(`max-h-[90px]`, `max-h-[550px]`);
    } else {
      parent.classList.replace(`max-h-[550px]`, `max-h-[90px]`);
    }

    current.dataset.open = current.dataset.open === `false` ? `true` : `false`;
    current.nextSibling.dataset.hidden =
      current.nextSibling.dataset.hidden === `true` ? `false` : `true`;
  };

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const objectUrl = URL.createObjectURL(e.target.files[0]);
    setPreview(objectUrl);

    setPersonal({
      ...personal,
      image: e.target.files[0],
    });

    return () => URL.revokeObjectURL(objectUrl);
  };

  const handleChange = ({ currentTarget: input }) => {
    setPersonal({ ...personal, [input.name]: input.value });
  };

  const handleStatusSelect = (e) => setPersonal({ ...personal, status: e });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userDataCopy = { ...userData };

    const userId = userDataCopy.slug;
    delete userDataCopy.id;
    delete userDataCopy.user;
    delete userDataCopy.slug;

    if (!userDataCopy.linktrees.length && !e.linktrees)
      userDataCopy.linktrees = undefined;

    const result = checkEquality(personal, socials, userDataCopy);

    if (result !== null) {
      displayLoader(e);
      const response = await postDataHandler([
        `personal`,
        userId,
        result,
        getUser().access,
      ]);

      if (response === true) {
        toast.success(`Saved successfully`);
        handleDivClick();

        setTimeout(() => {
          setUserData();
        }, 700);
      } else {
        removeLoader(e.target);
        toast.warn(`${response[0]}: ${response[1]}`);
      }
    }
  };

  return (
    <div className="max-h-[90px] lg:sticky lg:top-[80px] bg-gray-400/10 dark:bg-black/[.2] rounded-lg p-6 transition-all duration-700 ease-in-out overflow-y-hidden">
      {userData ? (
        <>
          <ButtonStyles
            id="profile-details-btn"
            type="button"
            className="group flex justify-center items-center gap-x-2 py-1"
            data-open="false"
            onClick={handleDivClick}
          >
            <span className="group-data-[open=true]:-rotate-90 ease-in-out duration-700">
              <MdMenuOpen size={24} />
            </span>{' '}
            Profile Details
          </ButtonStyles>
          <div className="group mt-5" data-hidden="true">
            <form className="flex flex-col gap-y-2 transform translate-y-20 opacity-0 group-data-[hidden=false]:translate-y-0 group-data-[hidden=false]:opacity-100 transition ease-in-out duration-700">
              <div className="flex flex-row justify-between items-center">
                <div className="w-32">
                  <ButtonImageInput
                    id="label-profile-image"
                    preview={preview ? preview : personal?.image}
                    alt={`${userData?.user?.first_name} ${userData?.user?.last_name} profile image`}
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
                inputValue={personal.status}
                onChange={handleStatusSelect}
                dataMsg="Edit your status"
              />
              <FlipTwo
                divHeight="h-[47px]"
                text="Location"
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
                inputAutocomplete="off"
                inputDisplay="hidden"
                inputBorderRadius="rounded-md"
                inputPadding="py-2 pl-6 pr-10"
                inputPlaceholder="Username"
                socials={socials}
                setSocials={setSocials}
              />
              <FormButton
                extraStyles="py-2"
                handleSubmit={handleSubmit}
                buttonText="Save Changes"
              />
            </form>
          </div>
        </>
      ) : (
        <Loader styles="w-10 h-10 mx-auto" />
      )}
    </div>
  );
};
