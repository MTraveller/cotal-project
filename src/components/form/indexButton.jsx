import React from 'react';

export const SubmitButton = ({ buttonText }) => (
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
    <span>
      <span id="button-loading" className="hidden">
        <span className="flex flex-row italic">
          <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Processing...
        </span>
      </span>
      <span id="button-text">{buttonText}</span>
    </span>
  </button>
);
