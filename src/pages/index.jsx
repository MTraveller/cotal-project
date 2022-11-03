import React, { useState } from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';

import Login from '../components/form/Login';
import Register from '../components/form/Register';
import Seo from '../components/Seo';
import { isLoggedIn } from '../services/authService';

const H1Styles = styled.h1`
  font-size: clamp(1.8rem, 2.8vw, 4rem);
`;

export default function IndexPage() {
  const [register, setRegister] = useState(false);

  const handleForm = () => (register ? setRegister(false) : setRegister(true));

  return isLoggedIn() ? (
    navigate(`/feed/`)
  ) : (
    <>
      <div className="w-full h-[283px] lg:h-auto flex lg:basis-1/2 items-end lg:items-center px-3 sm:px-0 lg:border-r-2 border-stone-600">
        <div className="w-full sm:w-96 lg:w-9/12 2xl:w-1/2 mx-auto">
          <H1Styles className="mb-8 font-black text-slate-300 dark:text-slate-600">
            Welcome to Cotal
          </H1Styles>
          <p className="mb-8 h-auto lg:mb-0 text-3xl tracking-wider font-thin text-slate-300 dark:text-slate-600">
            Where talents join forces with one another to reach a common goal.
          </p>
        </div>
      </div>
      <div className="w-full lg:h-full flex lg:basis-1/2 mb-8 lg:mb-0 items-start lg:items-center px-3 sm:px-0 lg:bg-indigo-700 dark:lg:bg-indigo-900">
        <div className="w-full sm:w-96 lg:w-9/12 2xl:w-1/2 mx-auto">
          {register ? (
            <Register form={handleForm} />
          ) : (
            <Login form={handleForm} />
          )}
        </div>
      </div>
    </>
  );
}

export const Head = () => <Seo title="Home" />;
