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
import { Link } from '@watheia/base-ui';
import { Config, useConfig } from '@watheia/waweb.config';
import { useAuth } from '@watheia/waweb.auth';
import cn from 'clsx';
import { useRouter } from 'next/router';
import { HtmlHTMLAttributes } from 'react';
import styles from './header.module.css';
import Logo from './logo';
import MobileNav from './mobile-nav';
import UserMenu from './user-menu';

export type HeaderProps = HtmlHTMLAttributes<HTMLDivElement>;

export default function Header({ className, ...props }: HeaderProps) {
  const router = useRouter();
  const activeRoute = router?.asPath ?? '/';
  const { isLoggedIn } = useAuth();
  const config = useConfig();

  return (
    <header className={cn(styles['header'], className)}>
      <div className={styles['headerLogos']}>
        <div className={styles['ActionButton']}>
          <MobileNav key={activeRoute} />
        </div>
        <Link href="/" className={styles['logo']}>
          <Logo />
        </Link>
      </div>
      <div className={styles['tabs']}>
        {config.header.primaryLinks.map(({ label, url }: { label: string; url: string }) => (
          <Link
            key={label}
            href={url}
            className={cn(styles['tab'], {
              [styles['tabActive']]: activeRoute.startsWith(url)
            })}
          >
            {label}
          </Link>
        ))}
      </div>
      {isLoggedIn && (
        <div className="flex items-center ml-4 mr-16 md:ml-6">
          <button
            type="button"
            className="p-1 rounded-full text-base-300 bg-base-content hover:text-base-700 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
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
