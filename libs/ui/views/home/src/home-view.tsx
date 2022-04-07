import clsx from 'clsx';
import { HtmlHTMLAttributes } from 'react';
import styles from './home-view.module.css';
import CtaSection from './lib/cta-section';
import { FeaturedPostsSection } from '@watheia/ui.views.blog';
import FeaturesSection from './lib/features-section';
import HeroSection from './lib/hero-section';
import StatsSection from './lib/stats-section';

/* eslint-disable-next-line */
export interface HomeViewProps extends Omit<HtmlHTMLAttributes<HTMLDivElement>, 'children'> {}

export function HomeView({ className, ...props }: HomeViewProps) {
  return (
    <div className={clsx(styles['container'], className)} {...props}>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <FeaturedPostsSection />
      <CtaSection />
    </div>
  );
}

export default HomeView;
