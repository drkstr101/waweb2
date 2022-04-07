import styles from './features-section.module.css';
import GlobeOutline from '@spectrum-icons/workflow/GlobeOutline';
import Money from '@spectrum-icons/workflow/Money';
import Import from '@spectrum-icons/workflow/Import';
import EmailNotification from '@spectrum-icons/workflow/EmailNotification';

/* eslint-disable-next-line */
export interface FeaturesSectionProps {}

export const features = [
  {
    name: 'Competitive rates',
    description:
      'Consequuntur omnis dicta cumque, inventore atque ab dolores aspernatur tempora ab doloremque.',
    icon: GlobeOutline
  },
  {
    name: 'No hidden fees',
    description:
      'Corporis quisquam nostrum nulla veniam recusandae temporibus aperiam officia incidunt at distinctio ratione.',
    icon: Money
  },
  {
    name: 'Instant transfers',
    description:
      'Omnis, illo delectus? Libero, possimus nulla nemo tenetur adipisci repellat dolore eligendi velit doloribus mollitia.',
    icon: Import
  },
  {
    name: 'Reminder emails',
    description:
      'Veniam necessitatibus reiciendis fugit explicabo dolorem nihil et omnis assumenda odit? Quisquam unde accusantium.',
    icon: EmailNotification
  }
];

export const FeaturesSection = () => (
  <div id="features" className="overflow-hidden">
    <div className="relative px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <svg
        className="absolute top-0 transform -translate-x-1/2 left-full -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
        width={404}
        height={784}
        fill="none"
        viewBox="0 0 404 784"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
            x={0}
            y={0}
            width={20}
            height={20}
            patternUnits="userSpaceOnUse"
          >
            <rect
              x={0}
              y={0}
              width={4}
              height={4}
              className="text-secondary"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect width={404} height={784} fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
      </svg>

      <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div className="lg:col-span-1">
          <h2 className="text-3xl font-extrabold tracking-tight text-base-content-700 sm:text-4xl">
            What even is this?
          </h2>
        </div>
        <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt>
                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-accent text-base-content">
                  <feature.icon UNSAFE_className="w-6 h-6" aria-hidden="true" />
                </div>
                <p className="mt-5 text-lg font-medium leading-6 text-base-content-700">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 text-base-content">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>
);

export default FeaturesSection;
