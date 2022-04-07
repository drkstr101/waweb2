import styles from './stats-section.module.css';
import { Image } from '@watheia/base-ui';

/* eslint-disable-next-line */
export interface StatsSectionProps {}

export const metrics = [
  {
    id: 1,
    stat: '8K+',
    emphasis: 'Companies',
    rest: 'use laoreet amet lacus nibh integer quis.'
  },
  {
    id: 2,
    stat: '25K+',
    emphasis: 'Countries around the globe',
    rest: 'lacus nibh integer quis.'
  },
  {
    id: 3,
    stat: '98%',
    emphasis: 'Customer satisfaction',
    rest: 'laoreet amet lacus nibh integer quis.'
  },
  { id: 4, stat: '12M+', emphasis: 'Issues resolved', rest: 'lacus nibh integer quis.' }
];

export const StatsSection = () => (
  <div className="relative overflow-hidden">
    <div className="absolute bottom-0 w-full h-80 lg:inset-0 lg:h-full">
      <div className="w-full h-full lg:grid lg:grid-cols-2">
        <div className="h-full lg:relative lg:col-start-2">
          <Image
            className="w-full h-full opacity-25 lg:absolute lg:inset-0"
            objectFit="cover"
            src="https://www.datocms-assets.com/64528/1647396476-photo-1521737852567-6949f3f9f2b5.jpg"
            alt="People working on laptops"
            layout="fill"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-neutral lg:inset-y-0 lg:left-0 lg:h-full lg:w-32 lg:bg-gradient-to-r"
          />
        </div>
      </div>
    </div>
    <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-x-8">
      <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 lg:col-start-1 lg:pb-24">
        <h2 className="text-sm font-semibold tracking-wide uppercase text-accent">
          Valuable Metrics
        </h2>
        <p className="mt-3 text-3xl font-extrabold text-base-content-700">
          Get actionable data that will help grow your business
        </p>
        <p className="mt-5 text-lg text-base-content">
          Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing quis in viverra
          tristique sem. Ornare feugiat viverra eleifend fusce orci in quis amet. Sit in et
          vitae tortor, massa. Dapibus laoreet amet lacus nibh integer quis. Eu vulputate diam
          sit tellus quis at.
        </p>
        <div className="grid grid-cols-1 mt-12 gap-y-12 gap-x-6 sm:grid-cols-2">
          {metrics.map((item) => (
            <p key={item.id}>
              <span className="block text-2xl font-bold text-base-content-700">
                {item.stat}
              </span>
              <span className="block mt-1 text-base text-base-content-300">
                <span className="font-medium text-base-content-700">{item.emphasis}</span>{' '}
                {item.rest}
              </span>
            </p>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default StatsSection;
