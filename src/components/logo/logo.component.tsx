import { Theme } from '@emotion/react';
import { SxProps } from '@mui/system';
import React from 'react';
import { Environment, ICONS, STYLE } from '../../common';
import { SSO } from '../../common/const/apps.const';
import { ImageElement, LinkElement } from '../elements';

export enum LogoName {
  MAIN = 'logoMain',
  SUB1 = 'logoSub1',
  SUB2 = 'logoSub2',
  SUB3 = 'logoSub3',
  SUB4 = 'logoSub4',
  SUB5 = 'logoSub5',
}
export interface LogoComponentProps {
  env: Environment;
  height?: number;
  sx?: SxProps<Theme>;
  logoName: LogoName;
}

export const LogoComponent: React.FC<LogoComponentProps> = ({
  env,
  logoName = LogoName.MAIN,
  height = STYLE.HEIGHT_LOGO_DEFAULT,
  sx = {},
}) => {
  return (
    <LinkElement href={SSO[env]}>
      <ImageElement url={ICONS[logoName]} sx={{ height, borderRadius: 'unset', width: 'auto', ...sx }} />
    </LinkElement>
  );
};
