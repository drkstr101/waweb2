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

import { SkipNavContent } from '@reach/skip-nav';
import { MessageList, useMessage } from '@watheia/waweb.message';
import cn from 'clsx';
import { HtmlHTMLAttributes } from 'react';
import config from './config.json';
import Footer from './footer';
import Header from './header';
import styles from './layout.module.css';
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
  const { messages } = useMessage();

  return (
    <>
      <ViewSource />
      <div className={cn(useBackdrop ? styles['backdrop'] : styles['layout'])}>
        {!hideNav && <Header navigation={config.navigation} />}
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
