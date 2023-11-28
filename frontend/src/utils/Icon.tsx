import * as Icons from '@assets/icons/index';
import { IconProps } from '@interfaces/utils';
import { SVGProps } from 'react';

function Icon({ icon, width = 10, height = 10 }: IconProps) {
  const Component: React.FC<SVGProps<SVGSVGElement>> = Icons[icon];

  return <Component width={width} height={height} />;
}

export default Icon;
