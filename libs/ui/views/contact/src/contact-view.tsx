import styles from './contact-view.module.css';

/* eslint-disable-next-line */
export interface ContactViewProps {}

export function ContactView(props: ContactViewProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ContactView!</h1>
    </div>
  );
}

export default ContactView;
