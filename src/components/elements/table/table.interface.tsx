import { SxProps, Theme } from '@mui/material';
import { TableActions } from './table.enum';

export type OnClickRow<R> = (row: R, index: number) => void;

export type OnDisabled<R> = (row: R, index: number) => Partial<Record<keyof typeof TableActions, boolean>>;

export type DisableRow = { columnId: string; compareWith: any };

export interface Column<R> {
  id: string;
  label: string | React.ReactNode;
  width?: number;
  align?: 'right' | 'left' | 'center';
  alignHead?: 'right' | 'left' | 'center';
  render?: (row: R, index: number) => React.ReactNode;
  sx?: SxProps<Theme>;
  isRowSpan?: boolean;
  stickyCss?: {
    borderLeft?: string;
    left?: number;
    right?: number;
    boxShadow?: string;
    zIndex?: number;
  };
}

export interface CollapseProps<R, RC> {
  iconTitle?: string;
  title: string;
  property?: string;
  columns: Column<RC>[];
  widthActions?: number;
  isStickyActions?: boolean;
  rowSpanProperty?: string;

  onOpenCollapse?: (row: R, index: number) => Promise<any>;

  onClickRow?: OnClickRow<RC>;
  onDisabled?: OnDisabled<RC>;

  // end row
  onSelectRow?: OnClickRow<RC>;
  onDeleteRow?: OnClickRow<RC>;
  onInfoRow?: OnClickRow<RC>;
  onCopyRow?: OnClickRow<RC>;
  onUpdateRow?: OnClickRow<RC>;
}
