import { IconProps } from './IconProps';

export const ChevronDown = ({ color = 'rgb(184, 219, 255)', ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" className="h-6 w-6" {...props}>
    <title>{'S ChevronDown 18 N'}</title>
    <path
      d="M4 7.01a1 1 0 0 1 1.706-.706L8.993 9.59l3.29-3.285A1 1 0 0 1 13.72 7.69l-.024.025L9.7 11.707a1 1 0 0 1-1.413 0L4.293 7.716A.995.995 0 0 1 4 7.01Z"
      style={{
        fill: color
      }}
    />
  </svg>
);

export default ChevronDown;
