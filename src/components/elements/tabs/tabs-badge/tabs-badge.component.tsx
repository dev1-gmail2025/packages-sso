import { useId } from 'react';
import { LayoutGroup, motion } from 'framer-motion';
import { Stack, SxProps, Theme, useTheme } from '@mui/material';
import React from 'react';
import { IconContentBadgeElement } from '../../icon';
import { LinkElement } from '../../link';
import { TabComponent, TabsComponentProps } from '../tabs.component';
import { TAB_WRAPPER_STYLES, TAB_STYLES, TAB_BACKGROUND_STYLES } from '../tabs.constant';

export interface TabBadge extends Omit<TabComponent, 'badgeCount'> {
  badgeCount: number;
}

export interface TabsBadgeComponentProps extends Omit<TabsComponentProps, 'tabs' | 'idSelect'> {
  tabIdSelect: string;
  tabs: TabBadge[];
}

export const TabsBadgeComponent: React.FC<TabsBadgeComponentProps> = ({
  tabIdSelect,
  tabs,
  size,
  sx = {},
  direction = 'row',
}) => {
  const { palette } = useTheme();
  const layoutGroupId = useId();

  return (
    <LayoutGroup id={layoutGroupId}>
      <Stack direction={direction as any} sx={{ ...TAB_WRAPPER_STYLES, ...sx } as SxProps<Theme>}>
        {tabs.map((tab) => (
          <LinkElement
            component={tab.href ? 'a' : 'span'}
            href={tab.href}
            onClick={tab.onClick}
            key={tab.id}
            id={tab.id}
          >
            <Stack
              component={motion.div}
              sx={TAB_STYLES}
              initial={{ color: tab.id === tabIdSelect ? palette.primary.contrastText : palette.text.primary }}
              animate={{ color: tab.id === tabIdSelect ? palette.primary.contrastText : palette.text.primary }}
              transition={{ duration: 0.2 }}
            >
              <IconContentBadgeElement
                icon={tab.icon}
                content={tab.name}
                size={size}
                badgeCount={tab.badgeCount}
                sx={{ zIndex: 1 }}
                isAddCountToContent
                id={tab.id}
              />
              {tab.id === tabIdSelect && (
                <Stack
                  component={motion.div}
                  sx={TAB_BACKGROUND_STYLES}
                  layoutId="selected"
                  animate={{ backgroundColor: palette.primary.main }}
                  initial={{ backgroundColor: palette.primary.main }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </Stack>
          </LinkElement>
        ))}
      </Stack>
    </LayoutGroup>
  );
};
