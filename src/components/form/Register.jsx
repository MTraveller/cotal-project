import React, { useState } from 'react';
// import Joi from 'joi';
import { navigate } from 'gatsby';
import { globalHistory } from '@gatsbyjs/reach-router/lib/history';

import { handleRegister } from '../../services/authService';
import {
  MiddleLoginRegisterInput as MiddleInput,
  BottomLoginRegisterInput as BottomInput,
  NameLoginRegisterInput as NameInput,
} from './input/indexInput';
import { SubmitButton } from './indexButton';

const Register = ({ form }) => {
  const previousPath = globalHistory.location.pathname;

  const [account, setAccount] = useState({
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: '',
  });

  // const schema = Joi.object({
  //   email: Joi.string().email({
  //     minDomainSegments: 2,
  //     tlds: { allow: false },
  //   }),
  //   password: Joi.string()
  //     .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$'))
  //     .required(),
  // });

  // //TODO: validate login form!
  // const validate = () => {};

  const toggleForm = () => form();

  const handleChange = ({ currentTarget: input }) => {
    setAccount({ ...account, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const { email, password } = account;
    const registerRes = await handleRegister(account);

    if (registerRes && previousPath === `/`) return navigate(`/feed/`);

    return null;
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {/* 
      Initial form sourced from: 
      https://tailwindui.com/components/application-ui/forms/sign-in-forms
    */}
      <div className="-space-y-px rounded-md shadow-sm">
        <div className="flex items-center">
          <div className="basis-1/2">
            <label htmlFor="firstname" className="sr-only">
              Firstname
            </label>
            <NameInput
              id="firstname"
              name="firstname"
              type="text"
              value={account.firstName}
              autoComplete="firstname"
              placeholder="Firstname"
              onChange={handleChange}
              borderRadius="rounded-tl-md"
            />
          </div>
          <div className="basis-1/2">
            <label htmlFor="lastname" className="sr-only">
              Lastname
            </label>
            <NameInput
              id="lastname"
              name="lastname"
              type="text"
              value={account.lastName}
              autoComplete="lastname"
              placeholder="Lastname"
              onChange={handleChange}
              borderRadius="rounded-tr-md"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <MiddleInput
            id="email-address"
            name="email"
            type="email"
            value={account.email}
            autoComplete="current-email"
            placeholder="Email address"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="username" className="sr-only">
            Username
          </label>
          <MiddleInput
            id="username"
            name="username"
            type="text"
            value={account.username}
            autoComplete="current-username"
            placeholder="Username"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <BottomInput
            id="password"
            name="password"
            type="password"
            value={account.password}
            autoComplete="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex items-start">
        <button
          type="button"
          className="font-medium text-slate-100 hover:text-slate-300"
          onClick={toggleForm}
        >
          Already Have an Account?
        </button>
      </div>

      <div>
        <SubmitButton buttonText="Sign up" />
      </div>
    </form>
  );
};

export default Register;
