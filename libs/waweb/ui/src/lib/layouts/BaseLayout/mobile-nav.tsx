import {
  ActionButton,
  Content,
  Dialog,
  DialogTrigger,
  Divider,
  Heading
} from '@adobe/react-spectrum';
import ShowMenu from '@spectrum-icons/workflow/ShowMenu';
import { Link } from '@watheia/base-ui';
import { HeaderModel } from '@watheia/model';
import cn from 'clsx';
import { useRouter } from 'next/router';
import styles from './mobile-nav.module.css';

const MobileNav = ({ primaryLinks }: HeaderModel) => {
  const router = useRouter();
  const activeRoute = router?.asPath ?? '/';
  return (
    <DialogTrigger type="tray">
      <ActionButton aria-label="Navigator" UNSAFE_style={{ cursor: 'pointer' }}>
        <ShowMenu />
      </ActionButton>
      {(close) => (
        <Dialog>
          <Heading>Navigator</Heading>
          <Divider />
          <Content>
            <nav className={styles['Nav']}>
              {primaryLinks.map(({ label, url }) => (
                <Link
                  key={label}
                  href={url}
                  onClick={close}
                  className={cn(styles['NavItem'], {
                    [styles['NavItem_active']]: activeRoute.startsWith(url)
                  })}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </Content>
        </Dialog>
      )}
    </DialogTrigger>
  );
};

export default MobileNav;
