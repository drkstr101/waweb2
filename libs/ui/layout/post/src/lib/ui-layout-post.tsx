import styles from './ui-layout-post.module.css';

/* eslint-disable-next-line */
export interface UiLayoutPostProps {}

export function UiLayoutPost(props: UiLayoutPostProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiLayoutPost!</h1>
    </div>
  );
}

export default UiLayoutPost;
