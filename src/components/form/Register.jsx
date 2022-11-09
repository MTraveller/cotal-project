import React, { useState } from 'react';
// import Joi from 'joi';
import { navigate } from 'gatsby';
import { globalHistory } from '@reach/router';

import { handleRegister } from '../../services/authService';
import { Input } from './input/Input';
import { SubmitButton } from './indexButton';

const Register = ({ form }) => {
  const previousPath = globalHistory.location.pathname;

  const [account, setAccount] = useState({
    username: '',
    password: '',
    email: '',
    firstname: '',
    lastname: '',
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

  const toggleForm = (e) => form(e.target.name);

  const handleChange = ({ currentTarget: input }) => {
    setAccount({ ...account, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const registerRes = await handleRegister({ account });

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
            <Input
              id="firstname"
              name="firstname"
              type="text"
              value={account.firstname}
              autoComplete="given-name"
              borderRadius="rounded-none rounded-tl-md"
              placeholder="Firstname"
              onChange={handleChange}
            />
          </div>
          <div className="basis-1/2">
            <label htmlFor="lastname" className="sr-only">
              Lastname
            </label>
            <Input
              id="lastname"
              name="lastname"
              type="text"
              value={account.lastname}
              autoComplete="family-name"
              borderRadius="rounded-none rounded-tr-md"
              placeholder="Lastname"
              onChange={handleChange}
            />
          </div>
        </div>
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
            borderRadius="rounded-none"
            placeholder="Email address"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="username" className="sr-only">
            Username
          </label>
          <Input
            id="username"
            name="username"
            type="text"
            value={account.username}
            autoComplete="username"
            borderRadius="rounded-none"
            placeholder="Username"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <Input
            id="password"
            name="password"
            type="password"
            value={account.password}
            autoComplete="current-password"
            borderRadius="rounded-b-md"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex items-start">
        <button
          type="button"
          name="login"
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
