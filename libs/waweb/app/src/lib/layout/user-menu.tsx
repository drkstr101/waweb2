import { Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import React, { Fragment } from 'react';

export interface NavItem {
  name: string;
  href: string;
}

const defaultItems = [
  { name: 'Account', href: '/account' },
  { name: 'Logout', href: '/signout' }
];

const UserMenu = ({ items = defaultItems }: { items?: NavItem[] }) => {
  return (
    <Menu as="div" className="relative ml-3" style={{ minWidth: 32, minHeight: 32 }}>
      <div>
        <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
          <span className="sr-only">Open user menu</span>
          <img
            className="h-8 w-8 rounded-full"
            src="https://www.datocms-assets.com/64528/1646636342-icon.png"
            alt=""
          />
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
        <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {items.map((item) => (
            <Menu.Item key={item.name}>
              {({ active }) => (
                <a
                  href={item.href}
                  className={clsx(
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700'
                  )}
                >
                  {item.name}
                </a>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default UserMenu;
