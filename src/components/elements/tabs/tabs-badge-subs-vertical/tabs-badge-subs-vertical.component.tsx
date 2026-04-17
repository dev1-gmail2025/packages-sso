import { Stack, SxProps, Theme, useTheme } from '@mui/material';
import { LayoutGroup, motion } from 'framer-motion';
import React, { useId } from 'react';
import { TabBadge } from '../tabs-badge/tabs-badge.component';
import { COLOR, STYLE } from '../../../../common';
import { IconContentBadgeElement } from '../../icon';
import { LinkElement } from '../../link';
import { TooltipOnHoverElement } from '../../tooltip';
import { IconContentBadgeSubsVerticalElement } from '../../icon/icon-content-badge-subs-vertical/icon-content-badge-subs-vertical.element';

export interface TabBadgeSubs extends TabBadge {
  subs?: TabBadgeSubs[];
  level: number;
}

export interface TabsBadgeSubsVerticalComponentProps {
  tabIdSelect: string;
  tabs: TabBadgeSubs[];
  size?: 'large' | 'small' | 'medium';
  sx?: SxProps<Theme>;
  hiddenContent?: boolean;
  openAllTab?: boolean;
  hoverWhenHiddenContent?: boolean;
  memoryOpen?: Record<string, boolean>;
  isReverseIconDropdown?: boolean;
}

export const TabsBadgeSubsVerticalComponent: React.FC<TabsBadgeSubsVerticalComponentProps> = ({
  tabIdSelect,
  tabs,
  size,
  sx = {},
  hiddenContent = false,
  openAllTab = false,
  hoverWhenHiddenContent = false,
  memoryOpen,
  isReverseIconDropdown = false,
}) => {
  const { palette } = useTheme();

  const groupId = useId();
  const selectedLayoutId = `${groupId}-selected`;
  const LayoutGroupCondition = tabs[0]?.level > 0 ? React.Fragment : LayoutGroup;

  return (
    <LayoutGroupCondition {...(tabs[0]?.level > 0 ? {} : { id: groupId })}>
      <Stack gap={0} sx={sx}>
        {tabs.map(tab => (
          <LinkElement
            component={tab.href ? 'a' : 'span'}
            href={tab.href}
            onClick={tab.onClick}
            key={`${groupId}-${tab.id}`}
            id={tab.id}
          >
            <Stack
              component={motion.div}
              initial={{ color: tab.id === tabIdSelect ? COLOR.COMMON.green6 : palette.text.primary }}
              animate={{ color: tab.id === tabIdSelect ? COLOR.COMMON.green6 : palette.text.primary }}
              transition={{ duration: 0.2 }}
              gap={0}
              sx={{
                gap: 0,
                marginLeft: tab.level !== 1 ? 3 : 0,
                position: 'relative',
                paddingRight: tab.subs || tab.badgeCount === 0 ? 0 : STYLE.PADDING_GAP_ITEM,
                // color: tab.id === tabIdSelect ? COLOR.COMMON.green6 : palette.text.primary,
              }}
            >
              {tab.subs ? (
                <IconContentBadgeSubsVerticalElement
                  icon={tab.icon}
                  content={tab.name}
                  size={size}
                  badgeCount={tab.badgeCount}
                  sx={{ padding: STYLE.PADDING_GAP_ITEM }}
                  subs={tab.subs}
                  tabIdSelect={tabIdSelect}
                  id={tab.id}
                  openAllTab={openAllTab}
                  hiddenContent={hiddenContent}
                  hoverWhenHiddenContent={hoverWhenHiddenContent}
                  memoryOpen={memoryOpen}
                  isReverseIconDropdown={isReverseIconDropdown}
                />
              ) : (
                <TooltipOnHoverElement
                  placement='right-end'
                  content={tab.name}
                  disableHoverListener={!(hiddenContent && hoverWhenHiddenContent)}
                  disableFocusListener={!(hiddenContent && hoverWhenHiddenContent)}
                  disableTouchListener={!(hiddenContent && hoverWhenHiddenContent)}
                >
                  <IconContentBadgeElement
                    icon={tab.icon}
                    content={tab.name}
                    size={size}
                    badgeCount={tab.badgeCount}
                    sx={{ zIndex: 1, padding: STYLE.PADDING_GAP_ITEM }}
                    isAddCountToContent
                    id={tab.id}
                    hiddenContent={hiddenContent}
                  />
                </TooltipOnHoverElement>
              )}
              {tab.id === tabIdSelect && (
                <Stack
                  component={motion.div}
                  sx={{
                    width: '100%',
                    height: '35px',
                    position: 'absolute',
                    borderRadius: STYLE.BORDER_RADIUS_ELEMENT_MIDDLE,
                    top: 0,
                    left: 0,
                    // backgroundColor: COLOR.COMMON.green2,
                  }}
                  layoutId={selectedLayoutId}
                  animate={{ backgroundColor: COLOR.COMMON.green2 }}
                  initial={{ backgroundColor: COLOR.COMMON.green2 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </Stack>
          </LinkElement>
        ))}
      </Stack>
    </LayoutGroupCondition>
  );
};
