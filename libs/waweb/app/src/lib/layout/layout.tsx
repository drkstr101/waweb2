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

import { BellIcon } from '@heroicons/react/outline';
import { SkipNavContent } from '@reach/skip-nav';
import { url } from '@watheia/utils';
import { useAuth } from '@watheia/waweb.auth';
import { MessageList, useMessage } from '@watheia/waweb.message';
import cn from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { HtmlHTMLAttributes } from 'react';
import config from './config.json';
import Footer from './footer';
import styles from './layout.module.css';
import Logo from './logo';
import MobileMenu from './mobile-menu';
import { NavZone } from './NavZone';
import UserMenu from './user-menu';
import ViewSource from './view-source';

export interface LayoutProps extends HtmlHTMLAttributes<HTMLDivElement> {
  hideNav?: boolean;
  layoutStyles?: any;
  usePadding?: boolean;
  useBackdrop?: boolean;
}

export default function Layout({
  children,
  className,
  hideNav,
  layoutStyles,
  usePadding = false,
  useBackdrop = false
}: LayoutProps) {
  const router = useRouter();
  const activeRoute = router?.asPath ?? '/';
  const { messages } = useMessage();
  const { isLoggedIn } = useAuth();

  return (
    <>
      <ViewSource />
      <div className={cn(useBackdrop ? styles['backdrop'] : styles['layout'])}>
        {!hideNav && (
          <header className={cn(styles['header'])}>
            <div className={styles['headerLogos']}>
              <MobileMenu key={router?.asPath ?? '/'} />
              <Link href={url()}>
                {/* eslint-disable-next-line */}
                <a className={styles['logo']}>
                  <Logo />
                </a>
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
        )}
        <div className={styles['page']}>
          <MessageList messages={messages} />
          <div
            className={cn(styles['main'], usePadding && 'px-2 py-6 sm:px-6 lg:px-8')}
            style={layoutStyles}
          >
            <div className={cn(styles['full'], className)}>
              <SkipNavContent />
              {children}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
