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
import { useConfig } from '@watheia/waweb.config';
import cn from 'clsx';
import { useRouter } from 'next/router';
import styles from './mobile-nav.module.css';

const MobileNav = () => {
  const router = useRouter();
  const activeRoute = router?.asPath ?? '/';
  const config = useConfig();
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
              {config.header.primaryLinks.map(
                ({ label, url }: { label: string; url: string }) => (
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
                )
              )}
            </nav>
          </Content>
        </Dialog>
      )}
    </DialogTrigger>
  );
};

export default MobileNav;
