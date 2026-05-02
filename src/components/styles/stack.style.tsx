import { LinearProgress, linearProgressClasses, Stack, TableCell, tableCellClasses } from '@mui/material';
import { styled } from '@mui/material/styles';
import { COLOR, STYLE } from '../../common';

/* ===================== BASE ===================== */
export const StackRow = styled(Stack)(() => ({
  flexDirection: 'row',
})) as typeof Stack;

export const StackRowWrap = styled(Stack)(() => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
})) as typeof Stack;

export const StackWrap = styled(Stack)(() => ({
  flexWrap: 'wrap',
})) as typeof Stack;

/* ===================== ALIGN ONLY ===================== */
export const StackAlignStart = styled(Stack)(() => ({
  alignItems: 'flex-start',
})) as typeof Stack;

export const StackAlignCenter = styled(Stack)(() => ({
  alignItems: 'center',
})) as typeof Stack;

export const StackAlignEnd = styled(Stack)(() => ({
  alignItems: 'flex-end',
})) as typeof Stack;

export const StackRowAlignStart = styled(Stack)(() => ({
  flexDirection: 'row',
  alignItems: 'flex-start',
})) as typeof Stack;

export const StackRowAlignCenter = styled(Stack)(() => ({
  flexDirection: 'row',
  alignItems: 'center',
})) as typeof Stack;

export const StackRowAlignEnd = styled(Stack)(() => ({
  flexDirection: 'row',
  alignItems: 'flex-end',
})) as typeof Stack;

/* ===================== JUSTIFY ONLY ===================== */
export const StackJustCenter = styled(Stack)(() => ({
  justifyContent: 'center',
})) as typeof Stack;

export const StackJustEnd = styled(Stack)(() => ({
  justifyContent: 'flex-end',
})) as typeof Stack;

export const StackJustBetween = styled(Stack)(() => ({
  justifyContent: 'space-between',
})) as typeof Stack;

export const StackJustAround = styled(Stack)(() => ({
  justifyContent: 'space-around',
})) as typeof Stack;

export const StackJustEvenly = styled(Stack)(() => ({
  justifyContent: 'space-evenly',
})) as typeof Stack;

export const StackRowJustCenter = styled(Stack)(() => ({
  flexDirection: 'row',
  justifyContent: 'center',
})) as typeof Stack;

export const StackRowJustEnd = styled(Stack)(() => ({
  flexDirection: 'row',
  justifyContent: 'flex-end',
})) as typeof Stack;

export const StackRowJustBetween = styled(Stack)(() => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
})) as typeof Stack;

export const StackRowJustAround = styled(Stack)(() => ({
  flexDirection: 'row',
  justifyContent: 'space-around',
})) as typeof Stack;

export const StackRowJustEvenly = styled(Stack)(() => ({
  flexDirection: 'row',
  justifyContent: 'space-evenly',
})) as typeof Stack;

/* ===================== ALIGN START + JUSTIFY ===================== */

export const StackAlignStartJustCenter = styled(Stack)(() => ({
  alignItems: 'flex-start',
  justifyContent: 'center',
})) as typeof Stack;

export const StackAlignStartJustEnd = styled(Stack)(() => ({
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
})) as typeof Stack;

export const StackAlignStartJustBetween = styled(Stack)(() => ({
  alignItems: 'flex-start',
  justifyContent: 'space-between',
})) as typeof Stack;

export const StackAlignStartJustAround = styled(Stack)(() => ({
  alignItems: 'flex-start',
  justifyContent: 'space-around',
})) as typeof Stack;

export const StackAlignStartJustEvenly = styled(Stack)(() => ({
  alignItems: 'flex-start',
  justifyContent: 'space-evenly',
})) as typeof Stack;

export const StackRowAlignStartJustCenter = styled(Stack)(() => ({
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'center',
})) as typeof Stack;

export const StackRowAlignStartJustEnd = styled(Stack)(() => ({
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
})) as typeof Stack;

export const StackRowAlignStartJustBetween = styled(Stack)(() => ({
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
})) as typeof Stack;

export const StackRowAlignStartJustAround = styled(Stack)(() => ({
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-around',
})) as typeof Stack;

export const StackRowAlignStartJustEvenly = styled(Stack)(() => ({
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-evenly',
})) as typeof Stack;

/* ===================== ALIGN CENTER + JUSTIFY ===================== */

export const StackAlignJustCenter = styled(Stack)(() => ({
  alignItems: 'center',
  justifyContent: 'center',
})) as typeof Stack;

export const StackAlignCenterJustCenter = StackAlignJustCenter;

export const StackAlignCenterJustEnd = styled(Stack)(() => ({
  alignItems: 'center',
  justifyContent: 'flex-end',
})) as typeof Stack;

export const StackAlignCenterJustBetween = styled(Stack)(() => ({
  alignItems: 'center',
  justifyContent: 'space-between',
})) as typeof Stack;

export const StackAlignCenterJustAround = styled(Stack)(() => ({
  alignItems: 'center',
  justifyContent: 'space-around',
})) as typeof Stack;

export const StackAlignCenterJustEvenly = styled(Stack)(() => ({
  alignItems: 'center',
  justifyContent: 'space-evenly',
})) as typeof Stack;

export const StackRowAlignJustCenter = styled(Stack)(() => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
})) as typeof Stack;

export const StackRowAlignCenterJustCenter = StackRowAlignJustCenter;

export const StackRowAlignCenterJustEnd = styled(Stack)(() => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
})) as typeof Stack;

export const StackRowAlignCenterJustBetween = styled(Stack)(() => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
})) as typeof Stack;

export const StackRowAlignCenterJustAround = styled(Stack)(() => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
})) as typeof Stack;

export const StackRowAlignCenterJustEvenly = styled(Stack)(() => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-evenly',
})) as typeof Stack;

/* ===================== ALIGN END + JUSTIFY ===================== */

export const StackAlignEndJustCenter = styled(Stack)(() => ({
  alignItems: 'flex-end',
  justifyContent: 'center',
})) as typeof Stack;

export const StackAlignEndJustEnd = styled(Stack)(() => ({
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
})) as typeof Stack;

export const StackAlignEndJustBetween = styled(Stack)(() => ({
  alignItems: 'flex-end',
  justifyContent: 'space-between',
})) as typeof Stack;

export const StackAlignEndJustAround = styled(Stack)(() => ({
  alignItems: 'flex-end',
  justifyContent: 'space-around',
})) as typeof Stack;

export const StackAlignEndJustEvenly = styled(Stack)(() => ({
  alignItems: 'flex-end',
  justifyContent: 'space-evenly',
})) as typeof Stack;

export const StackRowAlignEndJustCenter = styled(Stack)(() => ({
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'center',
})) as typeof Stack;

export const StackRowAlignEndJustEnd = styled(Stack)(() => ({
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
})) as typeof Stack;

export const StackRowAlignEndJustBetween = styled(Stack)(() => ({
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
})) as typeof Stack;

export const StackRowAlignEndJustAround = styled(Stack)(() => ({
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'space-around',
})) as typeof Stack;

export const StackRowAlignEndJustEvenly = styled(Stack)(() => ({
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'space-evenly',
})) as typeof Stack;

/* ===================== ROW WRAP + ALIGN ONLY ===================== */

export const StackRowWrapAlignStart = styled(Stack)(() => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
})) as typeof Stack;

export const StackRowWrapAlignCenter = styled(Stack)(() => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
})) as typeof Stack;

export const StackRowWrapAlignEnd = styled(Stack)(() => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'flex-end',
})) as typeof Stack;

/* ===================== ROW WRAP + JUSTIFY ONLY ===================== */

export const StackRowWrapJustCenter = styled(Stack)(() => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
})) as typeof Stack;

export const StackRowWrapJustEnd = styled(Stack)(() => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
})) as typeof Stack;

export const StackRowWrapJustBetween = styled(Stack)(() => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
})) as typeof Stack;

export const StackRowWrapJustAround = styled(Stack)(() => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
})) as typeof Stack;

export const StackRowWrapJustEvenly = styled(Stack)(() => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
})) as typeof Stack;

/* ===================== ROW WRAP + ALIGN START + JUSTIFY ===================== */

export const StackRowWrapAlignStartJustCenter = styled(Stack)(() => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  justifyContent: 'center',
})) as typeof Stack;

export const StackRowWrapAlignStartJustEnd = styled(Stack)(() => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
})) as typeof Stack;

export const StackRowWrapAlignStartJustBetween = styled(Stack)(() => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
})) as typeof Stack;

export const StackRowWrapAlignStartJustAround = styled(Stack)(() => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  justifyContent: 'space-around',
})) as typeof Stack;

export const StackRowWrapAlignStartJustEvenly = styled(Stack)(() => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  justifyContent: 'space-evenly',
})) as typeof Stack;

/* ===================== ROW WRAP + ALIGN CENTER + JUSTIFY ===================== */

export const StackRowWrapAlignJustCenter = styled(Stack)(() => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
})) as typeof Stack;

export const StackRowWrapAlignCenterJustCenter = StackRowWrapAlignJustCenter;

export const StackRowWrapAlignCenterJustEnd = styled(Stack)(() => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'flex-end',
})) as typeof Stack;

export const StackRowWrapAlignCenterJustBetween = styled(Stack)(() => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
})) as typeof Stack;

export const StackRowWrapAlignCenterJustAround = styled(Stack)(() => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-around',
})) as typeof Stack;

export const StackRowWrapAlignCenterJustEvenly = styled(Stack)(() => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-evenly',
})) as typeof Stack;

/* ===================== ROW WRAP + ALIGN END + JUSTIFY ===================== */

export const StackRowWrapAlignEndJustCenter = styled(Stack)(() => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'flex-end',
  justifyContent: 'center',
})) as typeof Stack;

export const StackRowWrapAlignEndJustEnd = styled(Stack)(() => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
})) as typeof Stack;

export const StackRowWrapAlignEndJustBetween = styled(Stack)(() => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
})) as typeof Stack;

export const StackRowWrapAlignEndJustAround = styled(Stack)(() => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'flex-end',
  justifyContent: 'space-around',
})) as typeof Stack;

export const StackRowWrapAlignEndJustEvenly = styled(Stack)(() => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'flex-end',
  justifyContent: 'space-evenly',
})) as typeof Stack;

export const StackBgDefaultBorRadLayCol = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: STYLE.PADDING_GAP_LAYOUT,
  borderRadius: STYLE.BORDER_RADIUS_ELEMENT,
})) as typeof Stack;

export const StackBgPaperBorRadLayCol = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: STYLE.PADDING_GAP_LAYOUT,
  borderRadius: STYLE.BORDER_RADIUS_ELEMENT,
})) as typeof Stack;

export const StackLabel = styled(Stack)(() => ({
  flexDirection: 'row',
  alignItems: 'center',
  marginRight: STYLE.PADDING_GAP_ITEM_SMALL,
  gap: STYLE.PADDING_GAP_ITEM_SMALL,
})) as typeof Stack;

export const SmallIcon = styled(Stack)(({ theme }) => ({
  border: `1px solid ${theme.palette.common.white}`,
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: theme.palette.background.paper,
  width: 16,
  height: 16,
})) as typeof Stack;

export const StackTabs = styled(Stack)(({ theme }) => ({
  borderRadius: STYLE.BORDER_RADIUS_ELEMENT_SMALL,
  border: `1px solid ${COLOR.NEUTRAL[400]}`,
  padding: '4px',
  backgroundColor: theme.palette.background.paper,
  width: 'fit-content',
  gap: 5,
  alignItems: 'stretch',
})) as typeof Stack;

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#008A77',
    color: theme.palette.common.white,
    fontWeight: 600,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
  '&:first-of-type': {
    borderBottomLeftRadius: '0 !important',
  },
  '&:last-child': {
    borderBottomRightRadius: '0 !important',
  },
})) as typeof TableCell;

export const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.primary,
  },
})) as typeof LinearProgress;
