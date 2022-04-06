import useConfig from './use-config';

export function MockComponent() {
  const config = useConfig();
  return <a href={config.repo}>{config.brandName}</a>;
}
