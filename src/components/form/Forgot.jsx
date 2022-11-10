import React, { useState } from 'react';
// import Joi from 'joi';

import { handleResetPassword } from '../../services/authService';
import { Input } from './input/Input';
import { SubmitButton } from './indexButton';

const Forgot = ({ form }) => {
  const [account, setAccount] = useState({ email: '' });
  const [forgot, setForgot] = useState();

  // const schema = Joi.object({
  //   email: Joi.string().email({
  //     minDomainSegments: 2,
  //     tlds: { allow: false },
  //   }),
  //   password: Joi.string()
  //     .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$'))
  //     .required(),
  // });

  // //TODO: validate Forgot form!
  // const validate = () => {};

  const toggleForm = (e) => form(e.target.name);

  const handleChange = ({ currentTarget: input }) => {
    setAccount({ ...account, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const forgotRes = await handleResetPassword(account);

    if (forgotRes === `success`) return setForgot(`success`);

    return null;
  };

  return !forgot === `success` ? (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="-space-y-px rounded-md shadow-sm">
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
            className="font-medium text-slate-100 hover:text-slate-300"
            onClick={toggleForm}
          >
            Already have an account?
          </button>
        </div>

        <div className="text-sm">
          <button
            type="button"
            name="register"
            className="font-medium text-slate-100 hover:text-slate-300"
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
