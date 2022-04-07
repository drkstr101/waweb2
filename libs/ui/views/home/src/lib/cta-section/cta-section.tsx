import Link from 'next/link';
import styles from './cta-section.module.css';
import LinkOut from '@spectrum-icons/workflow/LinkOut';

/* eslint-disable-next-line */
export interface CtaSectionProps {}

export const CtaSection = (props: CtaSectionProps) => (
  <div className="relative bg-neutral">
    <div className="h-0 bg-accent-700 md:absolute md:left-0 md:h-full md:w-1/2">
      <img
        className="object-cover w-full h-full"
        src="https://www.datocms-assets.com/64528/1646636841-graphs-enterprise.svg"
        alt=""
      />
    </div>
    <div className="relative px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-16">
      <div className="md:ml-auto md:w-1/2 md:pl-10">
        <h2 className="text-base font-semibold tracking-wider uppercase text-neutral-content-300">
          Award winning support
        </h2>
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-neutral-content sm:text-4xl">
          We&apos;re here to help
        </p>
        <p className="mt-3 text-lg text-neutral-content-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus
          etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet
          amet volutpat quisque ut interdum tincidunt duis.
        </p>
        <div className="mt-8">
          <div className="inline-flex rounded-md shadow">
            <Link href="/contact">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="inline-flex items-center justify-center px-5 py-3 text-base font-medium border border-transparent rounded-md bg-base-content hover:bg-base-content-300">
                Contact sales
                <LinkOut
                  UNSAFE_className="w-5 h-5 ml-3 -mr-1 text-primary"
                  aria-hidden="true"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CtaSection;
