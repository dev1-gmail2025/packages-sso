/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Theme } from '@mui/material';
import React from 'react';
import { IconElement } from '../../icon';

export type TreeMeta = {
  visibleRows: any[];
  rowLevels: Record<string, number>;
  hasChildrenById: Record<string, boolean>;
};

const EMPTY_TREE_META: TreeMeta = {
  visibleRows: [],
  rowLevels: {},
  hasChildrenById: {},
};

export const buildTreeMeta = ({
  rows,
  enableTree,
  expandedRowIds,
  getRowId,
  getChildren,
}: {
  rows: any[];
  enableTree: boolean;
  expandedRowIds: Set<string>;
  getRowId: (row: any) => string;
  getChildren: (row: any) => any[];
}): TreeMeta => {
  if (!enableTree) {
    return {
      ...EMPTY_TREE_META,
      visibleRows: rows,
    };
  }

  const rowLevels: Record<string, number> = {};
  const hasChildrenById: Record<string, boolean> = {};
  const visibleRows: any[] = [];

  const walk = (items: any[], level: number) => {
    items.forEach((item) => {
      const id = getRowId(item);
      const children = getChildren(item);

      rowLevels[id] = level;
      hasChildrenById[id] = children.length > 0;
      visibleRows.push(item);

      if (children.length > 0 && expandedRowIds.has(id)) {
        walk(children, level + 1);
      }
    });
  };

  walk(rows, 0);

  return {
    visibleRows,
    rowLevels,
    hasChildrenById,
  };
};

interface TreeToggleCellProps {
  row: any;
  getRowId: (row: any) => string;
  rowLevels: Record<string, number>;
  hasChildrenById: Record<string, boolean>;
  expandedRowIds: Set<string>;
  onToggle: (rowId: string) => void;
  palette: Theme['palette'];
}

export const TreeToggleCell: React.FC<TreeToggleCellProps> = ({
  row,
  getRowId,
  rowLevels,
  hasChildrenById,
  expandedRowIds,
  onToggle,
  palette,
}) => {
  const rowId = getRowId(row);
  const level = rowLevels[rowId] ?? 0;
  const hasChildren = hasChildrenById[rowId];
  const isExpanded = expandedRowIds.has(rowId);
  const treeStep = 16;
  const treeCanvasWidth = Math.max(level * treeStep + 14, 14);
  const currentX = level * treeStep + 7;

  return (
    <Box
      sx={{ display: 'flex', alignItems: 'stretch', cursor: hasChildren ? 'pointer' : 'default', minHeight: '100%' }}
      onClick={(e) => {
        if (!hasChildren) return;
        e.stopPropagation();
        onToggle(rowId);
      }}
    >
      <Box
        sx={{ position: 'relative', width: treeCanvasWidth, flexShrink: 0, alignSelf: 'stretch', minHeight: '100%' }}
      >
        {level > 0 && (
          <>
            <Box
              sx={{
                position: 'absolute',
                left: `${currentX}px`,
                top: '-1px',
                bottom: '50%',
                borderLeft: `1px solid ${palette.divider}`,
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                left: `${currentX}px`,
                top: '50%',
                width: `${treeStep / 2}px`,
                borderBottom: `1px solid ${palette.divider}`,
                transform: 'translateY(-50%)',
              }}
            />
          </>
        )}
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', minHeight: '100%' }}>
        {hasChildren ? (
          <IconElement icon={isExpanded ? 'expand_more' : 'chevron_right'} />
        ) : (
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: palette.text.disabled }} />
        )}
      </Box>
    </Box>
  );
};
