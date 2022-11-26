import tw from 'tailwind-styled-components';

export const ButtonStyles = tw.button`
  w-full
  mt-0.5
  bg-gray-300
  dark:bg-slate-900
  rounded-md
  ring-1
  ring-sky-500
  dark:ring-slate-400
  transition
  ease-in-out
  hover:ring-1
  hover:ring-offset-4
  hover:ring-offset-gray-300
  dark:hover:ring-offset-gray-900
  hover:ring-sky-500
  dark:hover:ring-yellow-400
  active:ring-offset-1
  active:ring-pink-500
  dark:active:ring-pink-400
`;
