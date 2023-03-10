import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import { useUserDataContext } from '../../context/UserDataContext';
import { handleLogout } from '../../services/authService';
import { ProfileImageSvg } from '../layout/element/ProfileImageSvg';

/**
 * Initial header was sourced from:
 * https://tailwindui.com/components/application-ui/application-shells/stacked
 */

const navigation = [
  { name: 'Home', href: '/feed/', current: true },
  { name: 'My Network', href: '/my-network/', current: false },
];

const userNavigation = [
  { name: 'Your Profile', href: '/profile/' },
  { name: 'Settings', href: '/settings/' },
  {
    name: 'Sign out',
    href: '/',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Header = ({ siteTitle, location, isLoggedIn }) => {
  const { userData } = useUserDataContext();

  const handleClick = (e) => {
    if (e.target.text === `Sign out`) return handleLogout();

    const parentNode = e.target.parentNode.parentNode;

    if (parentNode.id || parentNode.parentNode.id) {
      const closeBtn = parentNode.id
        ? parentNode.previousSibling.firstChild.lastChild.firstChild
        : parentNode.parentNode.previousSibling.firstChild.lastChild.firstChild;

      closeBtn.click();
    }
  };

  return isLoggedIn && location.pathmame !== `/` ? (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-gray-400/60 dark:border-gray-50/10 bg-gray-300/40 dark:bg-slate-900/75 text-gray-600 dark:text-slate-400">
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <StaticImage
                      className="h-8 w-8"
                      src="../../images/logo.png"
                      loading="eager"
                      width={32}
                      quality={95}
                      formats={['auto', 'webp', 'avif']}
                      alt="Cotal"
                    />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.href === location.pathname
                              ? 'bg-gray-400/50 dark:bg-gray-800 text-zinc-600 dark:text-slate-200'
                              : 'hover:bg-gray-600 hover:text-zinc-300 dark:hover:bg-gray-700 dark:hover:text-slate-300',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="sr-only">Open user menu</span>
                          {userData?.image ? (
                            <img
                              className="h-8 w-8 rounded-full"
                              src={userData?.image}
                              alt={`${userData?.user?.first_name} ${userData?.user?.last_name}`}
                            />
                          ) : (
                            <ProfileImageSvg widthHeight="w-8 h-8" />
                          )}
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <Link
                                  to={item.href}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                  onClick={handleClick}
                                >
                                  {item.name}
                                </Link>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-400 dark:bg-gray-800 p-2 text-gray-50 dark:text-gray-400 hover:bg-sky-700 dark:hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    as="a"
                    to={item.href}
                    className={classNames(
                      item.href === location.pathname
                        ? 'bg-gray-400/50 dark:bg-gray-800 text-zinc-600 dark:text-slate-200'
                        : 'hover:bg-gray-600 hover:text-zinc-300 dark:hover:bg-gray-700 dark:hover:text-slate-300',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? item.name : undefined}
                    onClick={handleClick}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="border-t border-gray-400/60 dark:border-gray-700 pt-4 pb-3">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    {userData?.image ? (
                      <img
                        className="h-10 w-10 rounded-full"
                        src={userData?.image}
                        alt={`${userData?.user?.first_name} ${userData?.user?.last_name}`}
                      />
                    ) : (
                      <ProfileImageSvg widthHeight="w-8 h-8" />
                    )}
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-zinc-900 dark:text-white">
                      {userData?.user?.first_name} {userData?.user?.last_name}
                    </div>
                    <div className="text-sm font-medium leading-none text-zinc-700 dark:text-gray-400">
                      {userData?.slug}
                    </div>
                  </div>
                </div>
                <div id="user-navigation" className="mt-3 space-y-1 px-2">
                  {userNavigation.map((item) => (
                    <Link
                      key={item.name}
                      as="a"
                      to={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-zinc-900 dark:text-gray-400 hover:bg-gray-600 dark:hover:bg-gray-700 hover:text-zinc-300 dark:hover:text-white"
                      onClick={handleClick}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  ) : location.pathname === `/` ? (
    <header className="lg:absolute lg:top-0 lg:left-5">
      <div className="flex items-center p-3 lg:bg-inherit text-white/[.2] dark:text-gray-600/[.5]">
        <Link to="/">{siteTitle}</Link>
      </div>
    </header>
  ) : (
    <header className="py-4 text-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link to="/">{siteTitle}</Link>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
