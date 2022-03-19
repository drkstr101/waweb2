/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { GlobeAltIcon, LightningBoltIcon, MailIcon, ScaleIcon } from '@heroicons/react/outline';
import { ChevronRightIcon, ExternalLinkIcon } from '@heroicons/react/solid';
import { Image } from '@watheia/base-ui';
import clsx from 'clsx';
import Link from 'next/link';

export const features = [
  {
    name: 'Competitive rates',
    description:
      'Consequuntur omnis dicta cumque, inventore atque ab dolores aspernatur tempora ab doloremque.',
    icon: GlobeAltIcon
  },
  {
    name: 'No hidden fees',
    description:
      'Corporis quisquam nostrum nulla veniam recusandae temporibus aperiam officia incidunt at distinctio ratione.',
    icon: ScaleIcon
  },
  {
    name: 'Instant transfers',
    description:
      'Omnis, illo delectus? Libero, possimus nulla nemo tenetur adipisci repellat dolore eligendi velit doloribus mollitia.',
    icon: LightningBoltIcon
  },
  {
    name: 'Reminder emails',
    description:
      'Veniam necessitatibus reiciendis fugit explicabo dolorem nihil et omnis assumenda odit? Quisquam unde accusantium.',
    icon: MailIcon
  }
];

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

/* This example requires Tailwind CSS v2.0+ */
export const posts = [
  {
    title: 'Boost your conversion rate',
    href: '#',
    category: { name: 'Article', href: '#', color: 'bg-neutral text-info' },
    description:
      'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Paul York',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    readingTime: '6 min'
  },
  {
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    category: { name: 'Video', href: '#', color: 'bg-neutral text-error' },
    description:
      'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    author: {
      name: 'Dessie Ryan',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    readingTime: '4 min'
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    category: { name: 'Case Study', href: '#', color: 'bg-neutral text-success' },
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    author: {
      name: 'Easer Collins',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    readingTime: '11 min'
  }
];

export const HeroSection = () => (
  <div className="relative">
    <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              <a
                href="#features"
                className="inline-flex items-center text-base-content bg-base-300 rounded-full p-1 pr-2 sm:text-base-content lg:text-sm xl:text-base-content hover:text-neutral-content"
              >
                <span className="px-3 py-0.5 text-accent-content text-xs font-semibold leading-5 uppercase tracking-wide bg-accent rounded-full">
                  Why?
                </span>
                <span className="ml-4 text-sm">Find out more</span>
                <ChevronRightIcon className="ml-2 w-5 h-5 text-primary" aria-hidden="true" />
              </a>
              <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="block">A better way to</span>
                <span className="block text-accent">ship web apps</span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat
                commodo. Elit sunt amet fugiat veniam occaecat fugiat.
              </p>
              <div className="mt-10 sm:mt-12">
                <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                  <div className="sm:flex">
                    <div className="min-w-0 flex-1">
                      <label htmlFor="email" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-300 focus:ring-offset-gray-900"
                      />
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <button
                        type="submit"
                        className="block w-full py-3 px-4 rounded-md shadow bg-accent text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-300 focus:ring-offset-gray-900"
                      >
                        Start free trial
                      </button>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                    Start your free 14-day trial, no credit card necessary. By providing your
                    email, you agree to our{' '}
                    <a href="#" className="font-medium text-white">
                      terms of service
                    </a>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
              <img
                className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/images/cloud-illustration-indigo-400.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const FeaturesSection = () => (
  <div id="features" className="overflow-hidden">
    <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <svg
        className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
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
          <h2 className="text-3xl font-extrabold tracking-tight text-base-content-300 sm:text-4xl">
            What even is this?
          </h2>
        </div>
        <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent text-base-content">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="mt-5 text-lg leading-6 font-medium text-base-content-300">
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

export const StatsSection = () => (
  <div className="relative overflow-hidden">
    <div className="h-80 w-full absolute bottom-0 xl:inset-0 xl:h-full">
      <div className="h-full w-full xl:grid xl:grid-cols-2">
        <div className="h-full xl:relative xl:col-start-2">
          <Image
            className="h-full w-full opacity-25 xl:absolute xl:inset-0"
            objectFit="cover"
            src="https://www.datocms-assets.com/64528/1647396476-photo-1521737852567-6949f3f9f2b5.jpg"
            alt="People working on laptops"
            layout="fill"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-neutral xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
          />
        </div>
      </div>
    </div>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
      <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
        <h2 className="text-sm font-semibold text-accent-300 tracking-wide uppercase">
          Valuable Metrics
        </h2>
        <p className="mt-3 text-3xl font-extrabold text-base-content-300">
          Get actionable data that will help grow your business
        </p>
        <p className="mt-5 text-lg text-base-content">
          Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing quis in viverra
          tristique sem. Ornare feugiat viverra eleifend fusce orci in quis amet. Sit in et
          vitae tortor, massa. Dapibus laoreet amet lacus nibh integer quis. Eu vulputate diam
          sit tellus quis at.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
          {metrics.map((item) => (
            <p key={item.id}>
              <span className="block text-2xl font-bold text-base-content-300">
                {item.stat}
              </span>
              <span className="mt-1 block text-base text-base-content-700">
                <span className="font-medium text-base-content-300">{item.emphasis}</span>{' '}
                {item.rest}
              </span>
            </p>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const CtaSection = () => (
  <div className="relative bg-neutral">
    <div className="h-0 bg-accent-700 md:absolute md:left-0 md:h-full md:w-1/2">
      <img
        className="w-full h-full object-cover"
        src="https://www.datocms-assets.com/64528/1646636841-graphs-enterprise.svg"
        alt=""
      />
    </div>
    <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="md:ml-auto md:w-1/2 md:pl-10">
        <h2 className="text-base font-semibold uppercase tracking-wider text-neutral-content-300">
          Award winning support
        </h2>
        <p className="mt-2 text-neutral-content text-3xl font-extrabold tracking-tight sm:text-4xl">
          We’re here to help
        </p>
        <p className="mt-3 text-lg text-neutral-content-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus
          etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet
          amet volutpat quisque ut interdum tincidunt duis.
        </p>
        <div className="mt-8">
          <div className="inline-flex rounded-md shadow">
            <Link href="/contact">
              <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-base bg-base-content hover:bg-base-content-300">
                Contact sales
                <ExternalLinkIcon
                  className="-mr-1 ml-3 h-5 w-5 text-primary"
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

export const FeaturedPostsSection = () => (
  <div className="pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div className="relative max-w-lg mx-auto divide-y-2 divide-primary-content lg:max-w-7xl">
      <div>
        <h2 className="text-3xl tracking-tight font-extrabold text-base-content-300 sm:text-4xl">
          Recent publications
        </h2>
        <p className="mt-3 text-xl text-base-content sm:mt-4">
          Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet.
          Sapien tortor lacus arcu.
        </p>
      </div>
      <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
        {posts.map((post) => (
          <div key={post.title} className="hover:shadow-xl hover:bg-neutral p-4">
            <div>
              <a href={post.category.href} className="inline-block">
                <span
                  className={clsx(
                    post.category.color,
                    'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium'
                  )}
                >
                  {post.category.name}
                </span>
              </a>
            </div>
            <a href={post.href} className="block mt-4">
              <p className="text-xl font-semibold text-base-content">{post.title}</p>
              <p className="mt-3 text-base text-base-content-700">{post.description}</p>
            </a>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                <a href={post.author.href}>
                  <span className="sr-only">{post.author.name}</span>
                  <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                </a>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-base-content-300">
                  <a href={post.author.href}>{post.author.name}</a>
                </p>
                <div className="flex space-x-1 text-sm text-base-content-700">
                  <time dateTime={post.datetime}>{post.date}</time>
                  <span aria-hidden="true">&middot;</span>
                  <span>{post.readingTime} read</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function IndexPage() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <FeaturedPostsSection />
      <CtaSection />
    </main>
  );
}
