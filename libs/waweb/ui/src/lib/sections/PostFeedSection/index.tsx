import { Link, mapMaxWidthStyles, mapMinHeightStyles } from '@watheia/base-ui';
import { PostFeedSectionModel, PostLayoutModel } from '@watheia/model';
import {
  getDataAttrs,
  getPageUrlPath,
  mapStylesToClassNames as mapStyles
} from '@watheia/utils';
import classNames from 'clsx';
import dayjs from 'dayjs';
import { renderBlock } from '../../../factory';
import ImageBlock from '../../molecules/ImageBlock';
import ArrowRightIcon from '../../svgs/arrow-right';

export default function PostFeedSection(props: PostFeedSectionModel) {
  const cssId = props.elementId || null;
  const styles = props.styles?.['self'] || {};
  const width = styles.width || 'wide';
  const height = styles.height || 'auto';
  const justifyContent = styles.justifyContent || 'center';
  return (
    <div
      id={cssId}
      {...getDataAttrs(props)}
      className={classNames(
        'flex flex-col justify-center relative',
        mapMinHeightStyles(height),
        styles.margin,
        styles.padding || 'py-12 px-4'
      )}
    >
      <div
        className={classNames('flex', 'w-full', mapStyles({ justifyContent: justifyContent }))}
      >
        <div className={classNames('w-full', mapMaxWidthStyles(width))}>
          {postFeedHeader(props)}
          {postFeedVariants(props)}
          {postFeedActions(props)}
        </div>
      </div>
    </div>
  );
}

function postFeedHeader(props: PostFeedSectionModel) {
  if (!props.title && !props.subtitle) {
    return null;
  }
  const styles = props.styles || {};
  return (
    <div>
      {props.title && (
        <h2
          className={classNames(styles['title'] ? mapStyles(styles['title']) : null)}
          data-sb-field-path=".title"
        >
          {props.title}
        </h2>
      )}
      {props.subtitle && (
        <p
          className={classNames(
            'text-lg',
            'sm:text-xl',
            styles['subtitle'] ? mapStyles(styles['subtitle']) : null,
            {
              'mt-6': props.title
            }
          )}
          data-sb-field-path=".subtitle"
        >
          {props.subtitle}
        </p>
      )}
    </div>
  );
}

function postFeedActions(props: PostFeedSectionModel) {
  const actions = props.actions || [];
  if (actions.length === 0) {
    return null;
  }
  const styles = props.styles || {};
  return (
    <div className="mt-12 overflow-x-hidden">
      <div
        className={classNames(
          'flex flex-wrap items-center -mx-2',
          styles['actions'] ? mapStyles(styles['actions']) : null
        )}
        data-sb-field-path=".actions"
      >
        {props.actions.map((action, index) =>
          renderBlock(action, {
            key: index,
            className: 'mb-3 mx-2 lg:whitespace-nowrap',
            'data-sb-field-path': `.${index}`
          })
        )}
      </div>
    </div>
  );
}

function postFeedVariants(props: PostFeedSectionModel) {
  const variant = props.variant || 'variant-a';
  switch (variant) {
    case 'variant-a':
      return postsVariantA(props);
    case 'variant-b':
      return postsVariantB(props);
    case 'variant-c':
      return postsVariantC(props);
  }
  return null;
}

function postsVariantA(props: PostFeedSectionModel) {
  const posts = props.posts || [];
  if (posts.length === 0) {
    return null;
  }
  return (
    <div
      className={classNames('grid', 'gap-x-6', 'gap-y-12', 'md:grid-cols-3', 'lg:gap-x-8', {
        'mt-12': props.title || props.subtitle
      })}
      {...(props.annotatePosts ? { 'data-sb-field-path': '.posts' } : null)}
    >
      {posts.map((post, index) => (
        <article key={index}>
          <Link
            href={getPageUrlPath(post)}
            className="block"
            data-sb-object-id={post.__metadata?.id}
          >
            {post.featuredImage && (
              <div className="relative w-full h-0 mb-6 overflow-hidden rounded-2xl pt-1/1 lg:mb-10">
                <ImageBlock
                  {...post.featuredImage}
                  className="absolute top-0 left-0 object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  data-sb-field-path="featuredImage"
                />
              </div>
            )}
            <div>
              <h3 className="text-2xl" data-sb-field-path="title">
                {post.title}
              </h3>
              {props.showDate && <PostDate post={post} className="mt-2" />}
              {props.showExcerpt && post.excerpt && (
                <p className="mt-6" data-sb-field-path="excerpt">
                  {post.excerpt}
                </p>
              )}
              <PostAttribution
                showAuthor={!!props.showAuthor}
                post={post}
                className={classNames(props.showExcerpt && post.excerpt ? 'mt-6' : 'mt-2')}
              />
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}

function postsVariantB(props: PostFeedSectionModel) {
  const posts = props.posts || [];
  if (posts.length === 0) {
    return null;
  }
  return (
    <div
      className={classNames('grid', 'gap-x-6', 'gap-y-12', 'md:grid-cols-5', 'lg:gap-x-8', {
        'mt-12': props.title || props.subtitle
      })}
      {...(props.annotatePosts ? { 'data-sb-field-path': '.posts' } : null)}
    >
      {posts.map((post, index) => (
        <article
          key={index}
          className={classNames(
            index % 4 === 0 || (index + 1) % 4 === 0 ? 'md:col-span-3' : 'md:col-span-2'
          )}
        >
          <Link
            href={getPageUrlPath(post)}
            className="block"
            data-sb-object-id={post.__metadata?.id}
          >
            {post.featuredImage && (
              <div
                className="relative w-full h-0 mb-6 overflow-hidden rounded-2xl pt-9/16 md:pt-0 md:h-64 lg:h-96 lg:mb-10"
                data-sb-field-path="featuredImage"
              >
                <ImageBlock
                  {...post.featuredImage}
                  className="absolute top-0 left-0 object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
            )}
            <div>
              <h3 className="text-2xl" data-sb-field-path="title">
                {post.title}
              </h3>
              {props.showDate && <PostDate post={post} className="mt-2" />}
              {props.showExcerpt && post.excerpt && (
                <p className="mt-6" data-sb-field-path="excerpt">
                  {post.excerpt}
                </p>
              )}
              <PostAttribution
                showAuthor={!!props.showAuthor}
                post={post}
                className={classNames(props.showExcerpt && post.excerpt ? 'mt-6' : 'mt-2')}
              />
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}

function postsVariantC(props: PostFeedSectionModel) {
  const posts = props.posts || [];
  if (posts.length === 0) {
    return null;
  }
  return (
    <div
      className={classNames('grid', 'gap-6', 'md:grid-cols-3', 'lg:gap-8', {
        'mt-12': props.title || props.subtitle
      })}
      {...(props.annotatePosts ? { 'data-sb-field-path': '.posts' } : null)}
    >
      {posts.map((post, index) => {
        return (
          <article key={index} className="overflow-hidden sb-card rounded-2xl">
            <Link
              href={getPageUrlPath(post)}
              className="block"
              data-sb-object-id={post.__metadata.id}
            >
              <div className="flex flex-col min-h-full">
                {post.featuredImage && (
                  <div
                    className="relative w-full h-0 overflow-hidden pt-9/16"
                    data-sb-field-path="featuredImage"
                  >
                    <ImageBlock
                      {...post.featuredImage}
                      className="absolute top-0 left-0 object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-col flex-grow px-4 pt-6 pb-8 sm:px-6">
                  <div className="flex-grow">
                    {props.showDate && <PostDate post={post} className="mb-2" />}
                    <h3 className="text-2xl" data-sb-field-path="title">
                      {post.title}
                    </h3>
                    <PostAttribution
                      showAuthor={!!props.showAuthor}
                      post={post}
                      className="mt-2"
                    />
                    {props.showExcerpt && post.excerpt && (
                      <p className="mt-3" data-sb-field-path="excerpt">
                        {post.excerpt}
                      </p>
                    )}
                  </div>
                  <div className="mt-3">
                    <div className="sb-component sb-component-block sb-component-link">
                      <span>Read post</span>
                      <ArrowRightIcon className="w-5 h-5 ml-3 fill-current" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        );
      })}
    </div>
  );
}

type PostDateProps = {
  post: PostLayoutModel;
  className?: string;
};
function PostDate({ post, className = '' }: PostDateProps) {
  if (!post.date) {
    return null;
  }
  const date = post.date;
  const dateTimeAttr = dayjs(date).format('YYYY-MM-DD HH:mm:ss');
  const formattedDate = dayjs(date).format('MMMM D, YYYY');
  return (
    <div className={className}>
      <time dateTime={dateTimeAttr} data-sb-field-path="date">
        {formattedDate}
      </time>
    </div>
  );
}

type PostAttributionProps = {
  showAuthor: boolean;
  post: PostLayoutModel;
  className?: string;
};

function PostAttribution({ showAuthor, post, className = '' }: PostAttributionProps) {
  const author = showAuthor ? postAuthor(post) : null;
  const category = postCategory(post);
  if (!author && !category) {
    return null;
  }
  return (
    <div className={className}>
      {author && (
        <>
          {'By '}
          {author}
        </>
      )}
      {category && (
        <>
          {author ? ' in ' : 'In '}
          {category}
        </>
      )}
    </div>
  );
}

function postAuthor(post: PostLayoutModel) {
  if (!post.author) {
    return null;
  }
  const author = post.author;
  const children = (
    <>
      {author.firstName && <span data-sb-field-path=".firstName">{author.firstName}</span>}{' '}
      {author.lastName && <span data-sb-field-path=".lastName">{author.lastName}</span>}
    </>
  );
  if (author.slug) {
    return (
      <Link data-sb-field-path="author" href={`/blog/author/${author.slug}`}>
        {children}
      </Link>
    );
  } else {
    return <span data-sb-field-path="author">{children}</span>;
  }
}

function postCategory(post: PostLayoutModel) {
  if (!post.category) {
    return null;
  }
  const category = post.category;
  return (
    <Link data-sb-field-path="category" href={getPageUrlPath(category)}>
      {category.name}
    </Link>
  );
}
