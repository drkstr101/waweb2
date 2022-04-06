import styles from './ui-layout-gallary.module.css';

/* eslint-disable-next-line */
export interface UiLayoutGallaryProps {}

export function UiLayoutGallary(props: UiLayoutGallaryProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiLayoutGallary!</h1>
    </div>
  );
}

export default UiLayoutGallary;
