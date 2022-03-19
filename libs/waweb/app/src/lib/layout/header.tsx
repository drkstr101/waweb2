/**
 * Copyright 2022 Watheia Labs, LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  ActionButton,
  Content,
  Dialog,
  DialogTrigger,
  Divider,
  Heading
} from '@adobe/react-spectrum';
import { BellIcon } from '@heroicons/react/outline';
import ShowMenu from '@spectrum-icons/workflow/ShowMenu';
import { Link } from '@watheia/base-ui';
import { url } from '@watheia/utils';
import { useAuth } from '@watheia/waweb.auth';
import cn from 'clsx';
import { useRouter } from 'next/router';
import { HtmlHTMLAttributes } from 'react';
import config from './config.json';
import styles from './header.module.css';
import Logo from './logo';
import { NavZone } from './NavZone';
import UserMenu from './user-menu';

export interface HeaderProps extends HtmlHTMLAttributes<HTMLDivElement> {
  navigation: NavZone[];
}

export default function Layout({ className, ...props }: HeaderProps) {
  const router = useRouter();
  const activeRoute = router?.asPath ?? '/';
  const { isLoggedIn } = useAuth();

  return (
    <header className={cn(styles['header'], className)}>
      <div className={styles['headerLogos']}>
        <div className={styles['mobile-nav-btn']}>
          <MobileNav {...props} />
        </div>
        <Link href={url().href} className={styles['logo']}>
          <Logo />
        </Link>
      </div>
      <div className={styles['tabs']}>
        {config.navigation.map(({ name, route }: NavZone) => (
          <Link key={name} href={url(route).href}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              className={cn(styles['tab'], {
                [styles['tabActive']]: activeRoute.startsWith(route)
              })}
            >
              {name}
            </a>
          </Link>
        ))}
      </div>
      {isLoggedIn && (
        <div className="flex items-center ml-4 mr-16 md:ml-6">
          <button
            type="button"
            className="p-1 text-base-300 bg-base-content rounded-full hover:text-base-700 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon className="w-6 h-6" aria-hidden="true" />
          </button>

          <UserMenu />
        </div>
      )}
    </header>
  );
}

const MobileNav = ({ navigation }: HeaderProps) => {
  const router = useRouter();
  const activeRoute = router?.asPath ?? '/';
  return (
    <DialogTrigger type="tray">
      <ActionButton aria-label="Navigator" UNSAFE_style={{ cursor: 'pointer' }}>
        <ShowMenu />
      </ActionButton>
      <Dialog>
        <Heading>Navigator</Heading>
        <Divider />
        <Content>
          <nav className={styles['mobile-nav']}>
            {navigation.map(({ name, route }) => (
              <Link
                key={name}
                href={route}
                className={cn(styles['mobile-nav-item'], {
                  [styles['mobile-nav-active']]: activeRoute.startsWith(route)
                })}
              >
                {name}
              </Link>
            ))}
          </nav>
        </Content>
      </Dialog>
    </DialogTrigger>
  );
};
