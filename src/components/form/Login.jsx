import React, { useState } from 'react';
// import Joi from 'joi';
import { navigate } from 'gatsby';
import { globalHistory } from '@gatsbyjs/reach-router/lib/history';

import { handleLogin } from '../../services/authService';
import {
  TopLoginRegisterInput as EmailInput,
  BottomLoginRegisterInput as PasswordInput,
} from './input/indexInput';
import { SubmitButton } from './indexButton';

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

    const loginRes = await handleLogin(account);

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
            New to Cotal?
          </button>
        </div>

        <div className="text-sm">
          <a
            href="#"
            className="font-medium text-slate-100 hover:text-slate-300"
          >
            Forgot your password?
          </a>
        </div>
      </div>

      <div>
        <SubmitButton buttonText="Sign in" />
      </div>
    </form>
  );
};

export default Login;
