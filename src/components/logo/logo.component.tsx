import { Theme } from '@emotion/react';
import { SxProps } from '@mui/system';
import React from 'react';
import { Environment, STYLE } from '../../common';
import { SSO } from '../../common/const/apps.const';
import { LinkElement, ImageElement } from '../elements';

export interface LogoComponentProps {
  env: Environment;
  url: string;
  height?: number;
  sx?: SxProps<Theme>;
}

export const LogoComponent: React.FC<LogoComponentProps> = ({
  env,
  url,
  height = STYLE.HEIGHT_LOGO_DEFAULT,
  sx = {},
}) => {
  return (
    <LinkElement href={SSO[env]}>
      <ImageElement url={url} sx={{ height, borderRadius: 'unset', width: 'auto', ...sx }} />
    </LinkElement>
  );
};
