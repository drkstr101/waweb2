import { Auth } from '@supabase/ui';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './auth-view.module.css';
import { useAuth } from './use-auth';

/**
  This component requires Tailwind CSS v2.0+,
  and some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function AuthView() {
  const { supabase } = useAuth();
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className={clsx('min-h-full flex')}>
        <div className="h-full flex-1 flex flex-col py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full h-full max-w-sm lg:w-96">
            <Auth
              className={styles['authcontainer']}
              supabaseClient={supabase}
              providers={['google', 'github', 'gitlab']}
              view={'sign_in'}
              socialLayout="horizontal"
              socialButtonSize="large"
            />
          </div>
        </div>
        <div className="hidden lg:block relative w-0 lg:h-full flex-1">
          <div className="absolute inset-0 h-full w-full">
            <Image
              width={1080}
              height={1599}
              src="https://www.datocms-assets.com/64528/1646636295-photo-1640872571837-f9405b1bb933.jpeg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
