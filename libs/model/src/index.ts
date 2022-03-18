export type LayoutType = 'PageLayout' | 'PostLayout' | 'PostFeedLayout';
// | 'PostFeedCategoryLayout';

export type ContentType =
  | 'Action'
  | 'Badge'
  | 'HeroSection'
  | 'ImageBlock'
  | 'PostFeedSection'
  | 'FeaturedPostsSection'
  | 'RecentPostsSection'
  | 'TextBlock'
  | 'VideoBlock';

export interface Metadata {
  readonly id: string;
  readonly source: string;
  readonly sourceName?: string;
  readonly sourcePath?: string;
  readonly relSourcePath?: string;
  readonly relProjectPath?: string;
  readonly modelType: string;
  readonly modelName: string;
  readonly modelLabel: string;
  readonly urlPath?: string;
  readonly routeHandler?: string;
  readonly pageCssClasses: string | string | Record<string, string>;
}

export interface MetaTag {
  readonly property: string;
  readonly content: string;
  readonly format?: string;
}

export interface Model {
  readonly __metadata: Metadata;
  readonly type: string;
  [k: string]: unknown;
}

export interface SeoModel extends Model {
  readonly metaTitle?: string;
  readonly metaDescription?: string;
  readonly titleSuffix?: string;
  readonly socialImage?: string;
  readonly metaTags: Array<MetaTag>;
}

export interface ContentModel extends Model {
  readonly elementId?: string;
  readonly styles: Record<string, any>;
  readonly type: ContentType;
  readonly className?: string;
}

export interface PageModel extends Model {
  readonly layout: LayoutType;
  readonly title: string;
  readonly seo?: SeoModel;
  readonly sections?: SectionModel[];
  readonly markdown_content?: string;
}

export interface SectionModel extends ContentModel {
  readonly colors: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BlockModel extends ContentModel {}

export interface BadgeModel extends ContentModel {
  readonly label: string;
}

export interface ActionModel extends ContentModel {
  readonly label?: string;
  readonly altText?: string;
  readonly url: string;
  readonly showIcon?: boolean;
  readonly icon: string;
  readonly iconPosition: string;
  readonly style: string;
}

export interface LabeledNavModel extends ContentModel {
  readonly label?: string;
  readonly text: string;
  readonly to: string;
  readonly variant?: 'primary' | 'secondary' | 'neutral' | 'accent';
}

// export interface CheckboxFormControlModel extends ContentModel {
//   readonly name: string;
//   readonly label?: string;
//   readonly isRequired?: boolean;
//   readonly width: string;
// }

export interface ConfigModel extends Model {
  readonly header?: HeaderModel;
  readonly footer?: FooterModel;
  readonly seo?: SeoModel;
}

// export interface ContactBlockModel extends Model {
//   readonly title?: string;
//   readonly phoneNumber?: string;
//   readonly phoneAltText?: string;
//   readonly email?: string;
//   readonly emailAltText?: string;
//   readonly address?: string;
//   readonly addressAltText?: string;
// }

// export interface ContactSection extends SectionModel {
//   readonly colors: string;
//   readonly backgroundSize: string;
//   readonly title?: string;
//   readonly text?: string;
//   readonly form?: FormBlockModel;
//   readonly media?: ImageBlockModel | VideoBlockModel;
// }

// export interface CtaSection extends SectionModel {
//   readonly colors: string;
//   readonly backgroundSize: string;
//   readonly title?: string;
//   readonly text?: string;
//   readonly actions: Array<ActionModel | LinkModel>;
//   readonly backgroundImage?: ImageBlockModel;
// }

// export interface EmailFormControlModel extends ContentModel {
//   readonly name?: string;
//   readonly label?: string;
//   readonly hideLabel?: boolean;
//   readonly placeholder?: string;
//   readonly isRequired?: boolean;
//   readonly width: string;
// }

// export interface FeatureHighlightSection extends SectionModel {
//   readonly colors: string;
//   readonly backgroundSize: string;
//   readonly title?: string;
//   readonly subtitle?: string;
//   readonly badge?: BadgeModel;
//   readonly text?: string;
//   readonly actions: Array<ActionModel | LinkModel>;
//   readonly media?: ImageBlockModel | VideoBlockModel;
// }

// export interface FeaturedItemModel extends ContentModel {
//   readonly elementId?: string;
//   readonly title?: string;
//   readonly subtitle?: string;
//   readonly text?: string;
//   readonly featuredImage?: ImageBlockModel;
//   readonly actions: Array<ActionModel | LinkModel>;
// }

// export interface FeaturedItemsSection extends SectionModel {
//   readonly title?: string;
//   readonly subtitle?: string;
//   readonly items: Array<FeaturedItemModel>;
//   readonly actions: Array<ActionModel | LinkModel>;
//   readonly columns?: number;
//   readonly enableHover?: boolean;
// }

// export interface FeaturedPeopleSection extends SectionModel {
//   readonly variant: string;
//   readonly colors: string;
//   readonly title?: string;
//   readonly subtitle?: string;
//   readonly actions: Array<ActionModel | LinkModel>;
//   readonly people: Array<PersonModel>;
// }

export interface FeaturedPostsSectionModel extends PostFeedSectionModel {
  readonly title?: string;
  readonly subtitle?: string;
}

export interface FooterModel extends ContentModel {
  readonly logo?: MediaModel;
  readonly copyrightText?: string;
  readonly legalLinks: Array<ActionModel | LinkModel>;
}

// export interface FormBlockModel extends ContentModel {
//   readonly variant: string;
//   readonly fields: Array<
//     | TextFormControlModel
//     | EmailFormControlModel
//     | TextareaFormControlModel
//     | CheckboxFormControlModel
//     | SelectFormControlModel
//   >;
//   readonly submitLabel?: string;
//   readonly elementId: string;
//   readonly action?: string;
//   readonly destination?: string;
// }

export interface HeaderModel extends ContentModel {
  readonly logo?: MediaModel;
  readonly primaryLinks: Array<LinkModel>;
}

export interface HeroSectionModel extends SectionModel {
  readonly colors: string;
  readonly title?: string;
  readonly subtitle?: string;
  readonly badge?: BadgeModel;
  readonly content?: string;
  readonly actions: Array<ActionModel | LinkModel>;
  readonly media?: ImageBlockModel | VideoBlockModel;
}

export interface ImageBlockModel extends BlockModel {
  readonly caption?: string;
  readonly media: MediaModel;
}

export interface LinkModel extends ContentModel {
  readonly label?: string;
  readonly altText?: string;
  readonly url: string;
}

export interface MediaModel extends Model {
  readonly alt?: string;
  readonly src: string;
  readonly width: number;
  readonly height: number;
}

// export interface MediaGallerySection extends SectionModel {
//   readonly title?: string;
//   readonly subtitle?: string;
//   readonly images: Array<ImageBlockModel>;
//   readonly spacing?: number;
//   readonly columns?: number;
//   readonly aspectRatio: string;
//   readonly imageSizePx?: number;
//   readonly showCaption?: boolean;
//   readonly enableHover?: boolean;
// }

export interface MetaTagModel extends Model {
  readonly property: string;
  readonly content?: string;
}

export interface PageLayout extends PageModel {
  readonly sections: Array<SectionModel>;
}

export interface PostFeedSectionModel extends SectionModel {
  readonly title?: string;
  readonly subtitle?: string;
  readonly showDate?: boolean;
  readonly showAuthor?: boolean;
  readonly showExcerpt?: boolean;
  readonly variant: string;
  readonly actions: Array<ActionModel | LinkModel>;
  readonly posts: Array<PostLayoutModel>;
  readonly annotatePosts?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PagedPostsSectionModel extends PostFeedSectionModel {}

export interface PersonModel extends Model {
  readonly firstName: string;
  readonly lastName?: string;
  readonly slug: string;
  readonly role?: string;
  readonly bio?: string;
  readonly avatar?: MediaModel;
}

export interface CategoryModel extends Model {
  readonly name: string;
  readonly slug: string;
  readonly description?: string;
}

export interface PostFeedLayoutModel extends PageModel {
  readonly numOfPostsPerPage?: number;
  readonly postFeed?: PostFeedSectionModel;
  readonly topSections: Array<SectionModel>;
  readonly bottomSections: Array<SectionModel>;
}

export interface PostLayoutModel extends PageModel {
  readonly date: string;
  readonly author: PersonModel;
  readonly category: CategoryModel;
  readonly excerpt?: string;
  readonly featuredImage?: ImageBlockModel;
  readonly bottomSections: Array<SectionModel>;
}

export interface DocumentLayoutModel extends PageModel {
  readonly author: PersonModel;
}

// export interface ProjectListModel extends ContentModel {
//   readonly title?: string;
//   readonly items: Array<ProjectListItemModel>;
// }

// export interface ProjectListItemModel extends ContentModel {
//   readonly title?: string;
//   readonly location?: string;
//   readonly text?: string;
//   readonly actions: Array<ActionModel | LinkModel>;
// }

// export interface ProjectsSection extends SectionModel {
//   readonly title?: string;
//   readonly subtitle?: string;
//   readonly projectLists: Array<ProjectListModel>;
// }

// export interface QuoteSection extends SectionModel {
//   readonly quote: string;
//   readonly name?: string;
//   readonly title?: string;
//   readonly backgroundImage?: ImageBlockModel;
// }

export interface RecentPostsSection extends PostFeedSectionModel {
  readonly recentCount?: number;
}

// export interface SelectFormControlModel extends ContentModel {
//   readonly name: string;
//   readonly label?: string;
//   readonly hideLabel?: boolean;
//   readonly defaultValue?: string;
//   readonly options: string;
//   readonly isRequired?: boolean;
//   readonly width: string;
// }

// export interface SupportSection extends SectionModel {
//   readonly content?: string;
//   readonly actions: Array<ActionModel | LinkModel>;
//   readonly items: Array<SupportItemModel>;
// }

// export interface SupportItemModel extends ContentModel {
//   readonly question: string;
//   readonly answer: string;
// }

// export interface TestimonialModel extends ContentModel {
//   readonly quote: string;
//   readonly name?: string;
//   readonly title?: string;
//   readonly image?: ImageBlockModel;
// }

// export interface TestimonialsSection extends SectionModel {
//   readonly colors: string;
//   readonly variant: string;
//   readonly title?: string;
//   readonly subtitle?: string;
//   readonly testimonials: Array<TestimonialModel>;
// }

// export interface TextFormControlModel extends ContentModel {
//   readonly name: string;
//   readonly label?: string;
//   readonly hideLabel?: boolean;
//   readonly placeholder?: string;
//   readonly isRequired?: boolean;
//   readonly width: string;
// }

export interface TextBlockModel extends BlockModel {
  readonly colors: string;
  readonly content?: string;
}

// export interface TextareaFormControlModel extends ContentModel {
//   readonly name: string;
//   readonly label?: string;
//   readonly hideLabel?: boolean;
//   readonly placeholder?: string;
//   readonly isRequired?: boolean;
//   readonly width: string;
// }

// export interface ThemeStyleModel extends ContentModel {
//   readonly fontHeadlines: string;
//   readonly h1?: Record<string, any>;
//   readonly h2?: Record<string, any>;
//   readonly h3?: Record<string, any>;
//   readonly h4?: Record<string, any>;
//   readonly h5?: Record<string, any>;
//   readonly h6?: Record<string, any>;
//   readonly fontBody: string;
//   readonly main?: string;
//   readonly light?: string;
//   readonly onLight?: string;
//   readonly dark?: string;
//   readonly onDark?: string;
//   readonly primary?: string;
//   readonly onPrimary?: string;
//   readonly secondary?: string;
//   readonly onSecondary?: string;
//   readonly complementary?: string;
//   readonly onComplementary?: string;
//   readonly buttonPrimary?: Record<string, any>;
//   readonly buttonSecondary?: Record<string, any>;
//   readonly link?: Record<string, any>;
// }

export interface VideoBlockModel extends BlockModel {
  readonly title?: string;
  readonly url: string;
  readonly autoplay?: boolean;
  readonly loop?: boolean;
  readonly muted?: boolean;
  readonly controls?: boolean;
  readonly aspectRatio: string;
}
