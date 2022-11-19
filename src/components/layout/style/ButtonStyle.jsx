import tw from 'tailwind-styled-components';

export const ButtonStyles = tw.button`
  w-full
  dark:bg-slate-900
  rounded-md
  ring-1
  dark:ring-slate-400
  transition
  ease-in-out
  hover:ring-1
  hover:ring-offset-4
  hover:ring-offset-gray-900
  hover:dark:ring-yellow-400
  active:ring-offset-1
  active:dark:ring-pink-400
`;
