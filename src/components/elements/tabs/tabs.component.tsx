import type { Theme } from '@emotion/react';
import type { SxProps } from '@mui/material';
import { Stack, useTheme } from '@mui/material';
import { LayoutGroup, motion } from 'framer-motion';
import React, { useEffect, useId, useState } from 'react';
import { DirectionProps, TabSizeProps, VariantProps } from '../../../common';
import { StackTabs } from '../../styles';
import { IconContentBadgeElement, IconContentBadgeSubsElement, IconContentElement } from '../icon';
import { LinkElement } from '../link';
import { StyledTab, StyledTabs, TAB_BACKGROUND_STYLES, TAB_STYLES } from './tabs.constant';

export const useTabsSelected = (idSelect?: string) => {
  const [selected, setSelected] = useState<string | undefined>(idSelect);

  useEffect(() => {
    setSelected(idSelect);
  }, [idSelect]);

  return { selected, setSelected };
};

export type TabsMotionItemBase = {
  id?: string;
  href?: string;
  onClick?: () => void;
  key?: React.Key;
};

export interface TabsMotionBaseProps<T extends TabsMotionItemBase> {
  tabs: T[];
  selectedId?: string;
  onSelectId?: (id?: string) => void;
  direction?: DirectionProps;
  sx?: SxProps;
  stackTabsSx?: SxProps;
  isSelectable?: (tab: T) => boolean;
  renderContent: (tab: T) => React.ReactNode;
}

export function TabsMotionBase<T extends TabsMotionItemBase>({
  tabs,
  selectedId,
  onSelectId,
  direction = DirectionProps.ROW,
  sx,
  stackTabsSx,
  isSelectable,
  renderContent,
}: TabsMotionBaseProps<T>) {
  const layoutGroupId = useId();
  const { palette } = useTheme();

  return (
    <LayoutGroup id={layoutGroupId}>
      <StackTabs direction={direction} sx={stackTabsSx}>
        {tabs.map((tab, index) => {
          const id = tab.id ?? String(index);
          const selectable = isSelectable ? isSelectable(tab) : true;
          const isSelected = id === selectedId;

          return (
            <LinkElement
              component={tab.href ? 'a' : 'span'}
              href={tab.href}
              onClick={tab.onClick}
              key={tab.key ?? id}
              id={tab.id}
            >
              <Stack
                component={motion.div}
                sx={
                  {
                    ...TAB_STYLES,
                    color: isSelected ? palette.primary.contrastText : palette.text.primary,
                    ...sx,
                  } as SxProps<Theme>
                }
                onClick={() => {
                  if (!selectable) return;
                  onSelectId?.(tab.id);
                }}
              >
                {renderContent(tab)}

                {isSelected && (
                  <Stack
                    component={motion.div}
                    sx={TAB_BACKGROUND_STYLES}
                    layoutId="selected"
                    animate={{ backgroundColor: palette.primary.main }}
                    initial={{ backgroundColor: palette.primary.main }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Stack>
            </LinkElement>
          );
        })}
      </StackTabs>
    </LayoutGroup>
  );
}

export interface TabComponent {
  id: string;
  icon?: string;
  name: string;
  onClick?: () => void;
  href?: string;
  badgeCount?: number;
}

export interface TabsComponentProps {
  idSelect?: string;
  tabs: TabComponent[];
  size?: TabSizeProps;
  direction?: DirectionProps;
  variant?: VariantProps;
  onChange?: (newValue: string) => void;
  sx?: SxProps;
  sxTabs?: SxProps;
  sxWrapper?: SxProps;
  mode?: 'default' | 'badge';
  getSubs?: (tab: TabComponent) => TabComponent[] | undefined;
}

export const TabsComponent: React.FC<TabsComponentProps> = ({
  idSelect,
  tabs,
  size,
  direction = DirectionProps.ROW,
  variant = VariantProps.CONTAINED,
  onChange,
  sx,
  sxTabs,
  sxWrapper,
  mode = 'default',
  getSubs,
}) => {
  const { selected, setSelected } = useTabsSelected(idSelect);

  if (variant === VariantProps.OUTLINED) {
    const selectedIndex = tabs.findIndex((tab) => tab.id === selected);
    return (
      <StyledTabs
       sx={sxTabs}
        value={selectedIndex >= 0 ? selectedIndex : 0}
        onChange={(_, newIndex) => {
          const next = tabs[newIndex]?.id;
          if (next) {
            setSelected(next);
            onChange?.(next);
          }
        }}
      >
        {tabs.map((it) => (
          <StyledTab
            icon={it.icon ?? ''}
            key={it.id}
            label={it.badgeCount !== undefined ? `${it.name} (${it.badgeCount})` : it.name}
            sx={{ textTransform: 'inherit', ...sx }}
          />
        ))}
      </StyledTabs>
    );
  }

  return (
    <TabsMotionBase
      tabs={tabs}
      selectedId={selected}
      onSelectId={(id) => setSelected(id)}
      direction={direction}
      sx={sxTabs}
      stackTabsSx={sxWrapper}
      isSelectable={(tab) => !getSubs?.(tab)?.length}
      renderContent={(tab) => {
        const subs = getSubs?.(tab);
        if (subs?.length) {
          return (
            <IconContentBadgeSubsElement
              icon={tab.icon}
              content={tab.name}
              badgeCount={tab.badgeCount ?? 0}
              sx={{ zIndex: 2 }}
              size={size}
              subs={subs.map((s) => ({
                ...s,
                badgeCount: s.badgeCount ?? 0,
              }))}
            />
          );
        }

        if (mode === 'badge') {
          return (
            <IconContentBadgeElement
              icon={tab.icon}
              content={tab.name}
              badgeCount={tab.badgeCount ?? 0}
              sx={{ zIndex: 2 }}
              size={size}
              isNowrap
              isAddCountToContent
            />
          );
        }

        return <IconContentElement icon={tab.icon} content={tab.name} sx={{ zIndex: 2 }} size={size} isNowrap />;
      }}
    />
  );
};
