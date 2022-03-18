import { LabeledNavModel } from '@watheia/model';
import Link from 'next/link';
import ChevronRight from '../../svgs/chevron-right';
import styles from './labeled-nav.module.css';

export function LabeledNav({ label, text, to }: LabeledNavModel) {
  return (
    <div className={styles['container']}>
      <Link href={to}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="inline-flex items-center text-base-content bg-base-300 rounded-full p-1 pr-2 sm:text-base-content lg:text-sm xl:text-base-content hover:text-neutral-content">
          {label && (
            <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-accent rounded-full">
              {label}
            </span>
          )}
          <span className="ml-4 text-sm">{text}</span>
          <ChevronRight className="ml-2 w-5 h-5 text-secondary-300" aria-hidden="true" />
        </a>
      </Link>
    </div>
  );
}

export default LabeledNav;
