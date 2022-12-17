import React, { useState } from 'react';
import { navigate } from 'gatsby';
import { globalHistory } from '@reach/router';

import { addLoader } from '../../utils/addLoader';
import { handleLogin } from '../../services/authService';
import { removeLoader } from '../../utils/removeLoader';
import { Input } from './input/Input';
import { IndexSubmitButton } from './IndexSubmitButton';

const Login = ({ form }) => {
  const previousPath = globalHistory.location.pathname;

  const [account, setAccount] = useState({
    email: '',
    password: '',
  });

  const toggleForm = (e) => form(e.target.name);

  const handleChange = ({ currentTarget: input }) => {
    setAccount({ ...account, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { currentTarget: form } = e;

    const submitButton = form.lastChild.firstChild;
    const buttonText = submitButton.firstChild.nextSibling;

    addLoader(submitButton, buttonText);

    const loginRes = await handleLogin(account);

    if (loginRes && previousPath === `/`) {
      return navigate(`/feed/`);
    } else {
      removeLoader(submitButton, buttonText);
    }

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
          <label htmlFor="login-email-address" className="sr-only">
            Email address
          </label>
          <Input
            id="login-email-address"
            name="email"
            type="email"
            value={account.email}
            autoComplete="email"
            inputDisplay="block"
            borderRadius="rounded-none rounded-t-md"
            padding="px-3 py-3 md:py-4"
            placeholder="Email address"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="login-password" className="sr-only">
            Password
          </label>
          <Input
            id="login-password"
            name="password"
            type="password"
            value={account.password}
            autoComplete="current-password"
            inputDisplay="block"
            borderRadius="rounded-none rounded-b-md"
            padding="px-3 py-3 md:py-4"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button
            type="button"
            name="register"
            className="font-medium text-slate-400 hover:text-slate-300"
            onClick={toggleForm}
          >
            New to Cotal?
          </button>
        </div>

        <div className="text-sm">
          <button
            type="button"
            name="forgot"
            className="font-medium text-slate-400 hover:text-slate-300"
            onClick={toggleForm}
          >
            Forgot your password?
          </button>
        </div>
      </div>

      <div>
        <IndexSubmitButton buttonText="Sign in" />
      </div>
    </form>
  );
};

export default Login;
