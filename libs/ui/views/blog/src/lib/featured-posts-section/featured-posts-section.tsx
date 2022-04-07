import clsx from 'clsx';
import styles from './featured-posts-section.module.css';

/* eslint-disable-next-line */
export interface FeaturedPostsSectionProps {}

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

export const FeaturedPostsSection = () => (
  <div className="px-4 pt-16 pb-20 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div className="relative max-w-lg mx-auto divide-y-2 divide-primary-content lg:max-w-7xl">
      <div>
        <h2 className="text-3xl font-extrabold tracking-tight text-base-content-700 sm:text-4xl">
          Recent publications
        </h2>
        <p className="mt-3 text-xl text-base-content sm:mt-4">
          Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet.
          Sapien tortor lacus arcu.
        </p>
      </div>
      <div className="grid gap-16 pt-12 mt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
        {posts.map((post) => (
          <div key={post.title} className="p-4 hover:shadow-xl hover:bg-neutral">
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
              <p className="mt-3 text-base text-base-content-300">{post.description}</p>
            </a>
            <div className="flex items-center mt-6">
              <div className="flex-shrink-0">
                <a href={post.author.href}>
                  <span className="sr-only">{post.author.name}</span>
                  <img className="w-10 h-10 rounded-full" src={post.author.imageUrl} alt="" />
                </a>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-base-content-700">
                  <a href={post.author.href}>{post.author.name}</a>
                </p>
                <div className="flex space-x-1 text-sm text-base-content-300">
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

export default FeaturedPostsSection;
