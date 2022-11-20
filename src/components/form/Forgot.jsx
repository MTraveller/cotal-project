import React, { useState } from 'react';

import { addLoader } from '../layout/element/button/addLoader';
import { handleResetPassword } from '../../services/authService';
import { removeLoader } from '../layout/element/button/removeLoader';
import { Input } from './input/Input';
import { SubmitButton } from './indexButton';

const Forgot = ({ form }) => {
  const [account, setAccount] = useState({ email: '' });
  const [forgot, setForgot] = useState(null);

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

    const forgotRes = await handleResetPassword(account);

    if (forgotRes === `success`) {
      return setForgot(`success`);
    } else {
      removeLoader(submitButton, buttonText);
    }

    return setForgot(null);
  };

  return forgot !== `success` ? (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="-space-y-px rounded-md shadow-sm">
        <p className="mb-3 text-slate-500 text-xs italic">
          Email is not set up, this is for illustration purposes only!
        </p>
        <div>
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <Input
            id="email-address"
            name="email"
            type="email"
            value={account.email}
            autoComplete="email"
            inputDisplay="block"
            borderRadius="rounded-md"
            padding="px-3 py-3 md:py-4"
            placeholder="Email address"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button
            type="button"
            name="login"
            className="font-medium text-slate-400 hover:text-slate-300"
            onClick={toggleForm}
          >
            Already have an account?
          </button>
        </div>

        <div className="text-sm">
          <button
            type="button"
            name="register"
            className="font-medium text-slate-400 hover:text-slate-300"
            onClick={toggleForm}
          >
            New to Cotal?
          </button>
        </div>
      </div>

      <div>
        <SubmitButton buttonText="Submit" />
      </div>
    </form>
  ) : (
    <div className="flex flex-col items-center gap-5">
      <h2 className="text-center text-slate-500 text-xl">
        Success, check your inbox for instruction
      </h2>
      <button
        type="button"
        name="login"
        className="w-52 font-medium bg-teal-500 hover:bg-slate-600 p-2 rounded-md text-slate-900 hover:text-teal-500"
        onClick={toggleForm}
      >
        Back!
      </button>
    </div>
  );
};

export default Forgot;
