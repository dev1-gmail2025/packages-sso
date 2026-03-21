import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { STYLE } from '../../../../common';
import { DirectionProps } from '../../../../common';
import { StackRow } from '../../../styles';
import { TabsComponent } from '../../tabs';
import { IconContentBadgeElement } from '../icon-content-badge/icon-content-badge.element';
import { IconContentElementProps } from '../icon-content/icon-content.element';
import { IconElement } from '../icon.element';

export interface IconContentBadgeSubsElementProps extends IconContentElementProps {
  subs: { id: string; icon?: string; name: string; onClick?: () => void; href?: string; badgeCount: number }[];
  idSubSelect?: string;
  badgeCount: number;
}

export const IconContentBadgeSubsElement: React.FC<IconContentBadgeSubsElementProps> = ({
  icon,
  content,
  size,
  color = 'inherit',
  sx = {},
  sxIcon = {},
  id,
  subs,
  idSubSelect,
  badgeCount,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <StackRow
      id={id}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        gap: STYLE.GAP_ICON_CONTENT_BY_SIZE[size || 'medium'],
        position: 'relative',
        cursor: 'pointer',
        ...sx,
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '100%',
          left: 0,
          width: `calc(100% + ${STYLE.PADDING_GAP_ITEM})`,
          height: 20,
          pointerEvents: 'auto',
          zIndex: 2,
        },
        zIndex: 6,
      }}
    >
      <IconContentBadgeElement
        icon={icon}
        content={content}
        color={color}
        sxIcon={sxIcon}
        size={size}
        badgeCount={badgeCount}
        sxBadge={{ right: -24 }}
      />

      <motion.span
        animate={{ rotate: hovered ? 180 : 0 }}
        transition={{ duration: 0.2 }}
        style={{ display: 'inline-flex' }}
      >
        <IconElement icon="arrow_drop_down" sx={sxIcon} />
      </motion.span>

      <AnimatePresence>
        {hovered ? (
          <motion.div
            key="tabs"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            style={{
              position: 'absolute',
              top: '100%',
              marginTop: '18px',
              left: 0,
              zIndex: 3,
              width: 'fit-content',
            }}
          >
            <TabsComponent
              tabs={subs}
              idSelect={idSubSelect}
              direction={DirectionProps.COLUMN}
              mode="badge"
              sxWrapper={{ background: 'transparent', boxShadow: 'none' }}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </StackRow>
  );
};
