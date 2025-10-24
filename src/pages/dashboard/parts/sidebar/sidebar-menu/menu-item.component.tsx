import { ListItem, ListItemIcon, Typography } from '@mui/material';
import React from 'react';
import { AppModule } from '../../../../../common/enums/app-category.enum';
import { getLimitLineCss } from '../../../../../common/utils/other/get-limit-line-css.utils';
import { IconElement } from '../../../../../components/elements/icon/icon.element';
import { TooltipOnHoverElement } from '../../../../../components/elements/tooltip/tooltip-on-hover.element';
import { StackRow } from '../../../../../components/styles/stack.style';
import { menuItemStyles } from './menu-styles';
import { useSidebar } from '../../../../../hooks/use-sidebar';

interface MenuItemProps {
  item: AppModule;
  isSelected: boolean;
  isExpanded?: boolean;
  onClick: () => void;
}

export const MenuItem: React.FC<MenuItemProps> = ({ item, isSelected, onClick }) => {
  const { isCollapsed } = useSidebar();
  const renderItem = () => {
    return (
      <ListItem onClick={onClick} sx={menuItemStyles.listItem(isSelected)}>
        <ListItemIcon sx={{ minWidth: isCollapsed ? 0 : 20 }}>
          <IconElement icon={item.icon} color={isSelected ? 'primary' : 'inherit'} />
        </ListItemIcon>

        {!isCollapsed && (
          <StackRow sx={{ flex: 1, gap: 0 }} justifyContent={'space-between'}>
            <Typography
              variant="body1"
              color={isSelected ? 'primary' : 'inherit'}
              sx={{
                ...getLimitLineCss(1),
              }}
            >
              {item.title}
            </Typography>
          </StackRow>
        )}
      </ListItem>
    );
  };
  if (isCollapsed) {
    return (
      <TooltipOnHoverElement placement="right" content={item.title}>
        {renderItem()}
      </TooltipOnHoverElement>
    );
  }
  return renderItem();
};
