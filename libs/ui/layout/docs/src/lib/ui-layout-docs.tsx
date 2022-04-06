import styles from './ui-layout-docs.module.css';

/* eslint-disable-next-line */
export interface UiLayoutDocsProps {}

export function UiLayoutDocs(props: UiLayoutDocsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiLayoutDocs!</h1>
    </div>
  );
}

export default UiLayoutDocs;
