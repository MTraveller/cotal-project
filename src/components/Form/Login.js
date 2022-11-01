import React, { useState } from 'react';
// import Joi from 'joi';
import { navigate } from 'gatsby';
import { globalHistory } from '@gatsbyjs/reach-router/lib/history';

import { handleLogin } from '../../services/authService';
import {
  TopLoginRegisterInput as EmailInput,
  BottomLoginRegisterInput as PasswordInput,
} from './input/indexInput';

const Login = ({ form }) => {
  const previousPath = globalHistory.location.pathname;

  const [account, setAccount] = useState({
    email: '',
    password: '',
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

    const { email, password } = account;
    const loginRes = await handleLogin(email, password);

    if (loginRes && previousPath === `/`) return navigate(`/feed/`);

    return null;
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {/* 
      Initial form sourced from: 
      https://tailwindui.com/components/application-ui/forms/sign-in-forms
      */}
      <div className="-space-y-px rounded-md shadow-sm">
        <div>
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <EmailInput
            id="email-address"
            name="email"
            type="email"
            value={account.email}
            autoComplete="email"
            placeholder="Email address"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <PasswordInput
            id="password"
            name="password"
            type="password"
            value={account.password}
            autoComplete="current-password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button
            type="button"
            className="font-medium text-slate-100 hover:text-slate-300"
            onClick={toggleForm}
          >
            Sign-up
          </button>
        </div>

        <div className="text-sm">
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Forgot your password?
          </a>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="group relative flex w-full justify-center rounded-md border border-transparent bg-slate-300 py-3 px-4 text-sm font-medium text-slate-500 hover:text-white hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
        >
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-slate-500 group-hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          Sign in
        </button>
      </div>
    </form>
  );
};

export default Login;
