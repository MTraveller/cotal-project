import React, { Fragment, useEffect, useState } from 'react';

import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const choices = [
  `Owner`,
  `Employee`,
  `Job Seeker`,
  `Open To Collaborate`,
  `Hands Full`,
  `Traveling`,
  `Not Specified`,
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function SelectInput({ value, onChange }) {
  const [selected, setSelected] = useState(choices[0]);

  useEffect(() => {
    if (value) setSelected(value);
  }, [value]);

  // prettier-ignore
  const callOnChange = (e) => ((setSelected(e), onChange(e)));

  return (
    // Initial listbox select sourced from:
    // https://tailwindui.com/components/application-ui/forms/select-menus
    <Listbox value={selected} onChange={callOnChange}>
      {({ open }) => (
        <div className="w-full">
          <Listbox.Label className="hidden text-sm font-medium text-gray-700">
            Choose option
          </Listbox.Label>
          <div className="relative w-full">
            <Listbox.Button className="relative w-full cursor-default rounded-md border border-slate-400 bg-slate-500 py-2 pl-3 pr-10 text-left shadow-sm text-white placeholder-white focus:z-10 focus:border-yellow-300 focus:outline-none focus:ring-yellow-300 sm:text-sm">
              <span className="flex items-center">
                <span className="ml-3 block">{selected}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {choices.map((option) => (
                  <Listbox.Option
                    key={option}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(
                              selected ? 'font-semibold' : 'font-normal',
                              'ml-3 block'
                            )}
                          >
                            {option}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </div>
      )}
    </Listbox>
  );
}
