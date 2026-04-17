import { Stack } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { STYLE } from '../../../../common';
import { StackRowAlignCenter } from '../../../styles';
import {
  TabBadgeSubs,
  TabsBadgeSubsVerticalComponent,
} from '../../tabs/tabs-badge-subs-vertical/tabs-badge-subs-vertical.component';
import { TooltipOnHoverElement } from '../../tooltip';
import { IconContentBadgeElement } from '../icon-content-badge/icon-content-badge.element';
import { IconContentElementProps } from '../icon-content/icon-content.element';
import { IconElement } from '../icon.element';

export interface IconContentBadgeSubsVerticalElementProps extends IconContentElementProps {
  subs: TabBadgeSubs[];
  tabIdSelect: string;
  badgeCount: number;
  openAllTab?: boolean;
  hoverWhenHiddenContent?: boolean;
  memoryOpen?: Record<string, boolean>;
  isReverseIconDropdown?: boolean;
}

export const IconContentBadgeSubsVerticalElement: React.FC<IconContentBadgeSubsVerticalElementProps> = ({
  icon,
  content,
  size,
  sx = {},
  id,
  hiddenContent,

  subs,
  tabIdSelect,
  badgeCount,
  openAllTab = false,
  hoverWhenHiddenContent = false,
  memoryOpen,
  isReverseIconDropdown = false,
}) => {
  const [openSubs, setOpenSubs] = useState(memoryOpen ? memoryOpen[id!] : false);

  if (memoryOpen && !id) throw new Error('Vui lòng cung cấp id để sử dụng memoryOpen!');

  return (
    <React.Fragment>
      <Stack sx={{ zIndex: 1 }}>
        <TooltipOnHoverElement
          placement='right-end'
          content={content}
          disableHoverListener={!(hiddenContent && hoverWhenHiddenContent)}
          disableFocusListener={!(hiddenContent && hoverWhenHiddenContent)}
          disableTouchListener={!(hiddenContent && hoverWhenHiddenContent)}
        >
          <StackRowAlignCenter
            id={id}
            onClick={() => setOpenSubs(!openSubs)}
            sx={{
              gap: STYLE.GAP_ICON_CONTENT_BY_SIZE[size || 'medium'],
              cursor: 'pointer',
              ...(isReverseIconDropdown ? { flexDirection: 'row-reverse', justifyContent: 'flex-end', gap: 0 } : {}),
              ...sx,
            }}
          >
            <IconContentBadgeElement
              icon={icon}
              content={content}
              size={size}
              badgeCount={badgeCount}
              isAddCountToContent
              hiddenContent={hiddenContent}
            />

            <motion.span
              animate={{ rotate: openAllTab || openSubs ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              style={{ display: 'inline-flex' }}
            >
              <IconElement icon='arrow_drop_down' />
            </motion.span>
          </StackRowAlignCenter>
        </TooltipOnHoverElement>
      </Stack>

      {(openAllTab || openSubs || (memoryOpen && memoryOpen[id!])) && (
        <TabsBadgeSubsVerticalComponent
          tabs={subs}
          tabIdSelect={tabIdSelect}
          openAllTab={openAllTab}
          hiddenContent={hiddenContent}
          hoverWhenHiddenContent={hoverWhenHiddenContent}
          memoryOpen={memoryOpen}
          isReverseIconDropdown={isReverseIconDropdown}
        />
      )}
    </React.Fragment>
  );
};
