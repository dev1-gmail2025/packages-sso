import { Box, IconButton, Popover, Typography } from '@mui/material';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { COLOR, STYLE } from '../../../common';
import { BORDER_RADIUS_ELEMENT_SMALL } from '../../../common/const/style.const';
import { StackRowAlignCenter, StackRowAlignCenterJustBetween } from '../../styles';
import { ButtonElement } from '../button';
import { IconElement } from '../icon';
import { TextFieldDateElement, TextFieldDateRangeElement, TextFieldSelectElement } from '../text-field';

import { Stack } from '@mui/system';
import { generateId, parseDateMacroToTimestamp } from './advanced-operator-filter.helper';
import {
  DATE_OPERATOR_OPTIONS,
  DATE_OPTIONS,
  DateFilterMacro,
  FIELD_WIDTH,
  FilterOperator,
  FULL_OPERATOR_OPTIONS,
  OPERATOR_OPTIONS,
  OPERATOR_WIDTH,
  VALUE_WIDTH,
} from './filter.enum';
import { AdvancedOperatorFilterField, FilterRowState, FilterRule } from './filter.interface';

interface FilterValueInputProps {
  field: AdvancedOperatorFilterField;
  rowValue: string;
  onChange: (newValue: string) => void;
}

const FilterValueInput: React.FC<FilterValueInputProps> = ({ field, rowValue, onChange }) => {
  switch (field.type) {
    case 'select':
      return (
        <TextFieldSelectElement
          label=''
          value={rowValue ?? field.defaultValue}
          options={field.options || []}
          placeholder='Tất cả'
          onChange={e => onChange(e.target.value as string)}
        />
      );

    case 'date': {
      const macroParts = rowValue ? rowValue.split('|') : '';
      const currentMacro = macroParts[0];
      const exactDate = currentMacro === DateFilterMacro.EXACT ? macroParts[1] : '';
      const startDateRange = currentMacro === DateFilterMacro.DATE_RANGE ? macroParts[1] : '';
      const endDateRange = currentMacro === DateFilterMacro.DATE_RANGE ? macroParts[2] : '';

      const isCustomInput = currentMacro === DateFilterMacro.EXACT || currentMacro === DateFilterMacro.DATE_RANGE;

      return (
        <Box sx={{ display: 'flex', gap: STYLE.PADDING_GAP_ITEM, width: '100%' }}>
          <Box sx={{ width: isCustomInput ? '140px' : '100%', flexShrink: 0 }}>
            <TextFieldSelectElement
              label=''
              value={currentMacro}
              options={DATE_OPTIONS}
              placeholder=''
              onChange={e => {
                const macro = e.target.value as string;
                let nextVal = macro;
                if (macro === DateFilterMacro.EXACT) nextVal = `${DateFilterMacro.EXACT}|`;
                if (macro === DateFilterMacro.DATE_RANGE) nextVal = `${DateFilterMacro.DATE_RANGE}||`;
                onChange(nextVal);
              }}
            />
          </Box>

          {currentMacro === DateFilterMacro.EXACT && (
            <Box sx={{ flex: 1 }}>
              <TextFieldDateElement
                name={`exact-date-${generateId()}`}
                label=''
                value={exactDate ? exactDate : null}
                onChange={e => {
                  const dayjsVal = e.target.value;
                  const dateVal = dayjsVal ? dayjs(dayjsVal).format('YYYY-MM-DD') : '';
                  onChange(`${DateFilterMacro.EXACT}|${dateVal}`);
                }}
              />
            </Box>
          )}

          {currentMacro === DateFilterMacro.DATE_RANGE && (
            <Box sx={{ flex: 1 }}>
              <TextFieldDateRangeElement
                format='DD/MM/YYYY'
                placeholder='Ngày bắt đầu — Ngày kết thúc'
                label=''
                fromDate={startDateRange}
                toDate={endDateRange}
                onFromDateChange={val => {
                  const dateVal = val ? dayjs(val).format('YYYY-MM-DD') : '';
                  onChange(`${DateFilterMacro.DATE_RANGE}|${dateVal}|${endDateRange}`);
                }}
                onToDateChange={val => {
                  const dateVal = val ? dayjs(val).format('YYYY-MM-DD') : '';
                  onChange(`${DateFilterMacro.DATE_RANGE}|${startDateRange}|${dateVal}`);
                }}
              />
            </Box>
          )}
        </Box>
      );
    }
  }
};

export interface AdvancedOperatorFilterDialogProps {
  open: boolean;
  title?: string;
  fields: AdvancedOperatorFilterField[];
  value: FilterRule[];
  operatorOptions?: { label: string; value: FilterOperator }[];
  fullOperator?: boolean;
  anchorEl?: HTMLElement | null;
  offset?: { x?: number; y?: number };
  onClose: () => void;
  onApply: (nextValue: FilterRule[]) => void;
}

export const AdvancedOperatorFilterDialog: React.FC<AdvancedOperatorFilterDialogProps> = ({
  open,
  title = 'Tùy chỉnh bộ lọc nâng cao',
  fields,
  value,
  operatorOptions = OPERATOR_OPTIONS,
  fullOperator = false,
  anchorEl,
  offset,
  onClose,
  onApply,
}) => {
  const [rows, setRows] = useState<FilterRowState[]>([]);
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);

  useEffect(() => {
    if (open) {
      if (value && value.length > 0) {
        setRows(
          value.map(v => ({
            id: generateId(),
            fieldKey: v.field,
            operator: v.operator,
            value: v.value,
          })),
        );
      } else {
        setRows([]);
      }
      setDraggingIndex(null);
    }
  }, [open, value]);

  const handleUpdateRow = (index: number, updates: Partial<FilterRowState>) => {
    setRows(prev => prev.map((r, i) => (i === index ? { ...r, ...updates } : r)));
  };

  const handleReset = () => setRows([]);

  const handleRemove = (index: number) => setRows(prev => prev.filter((_, i) => i !== index));

  const handleAdd = () => {
    setRows(prev => {
      if (prev.length >= fields.length) return prev;
      const usedKeys = new Set(prev.map(r => r.fieldKey));
      const nextField = fields.find(f => !usedKeys.has(f.key)) || fields[0];
      if (!nextField) return prev;
      return [
        ...prev,
        {
          id: generateId(),
          fieldKey: nextField.key,
          operator: FilterOperator.Equals,
          value: nextField.defaultValue,
        },
      ];
    });
  };

  const handleDrop = (dropIndex: number) => {
    if (draggingIndex === null || dropIndex === draggingIndex) return;
    setRows(prev => {
      const next = [...prev];
      const [moved] = next.splice(draggingIndex, 1);
      next.splice(dropIndex, 0, moved);
      return next;
    });
    setDraggingIndex(null);
  };

  const handleApply = () => {
    const nextRules: FilterRule[] = rows
      .filter(r => r.fieldKey)
      .map(r => {
        const field = fields.find(f => f.key === r.fieldKey);
        let fromDate: number | undefined;
        let toDate: number | undefined;

        const isDateType = field?.type === 'date';
        if (isDateType && r.operator !== FilterOperator.IsNull && r.operator !== FilterOperator.IsNotNull) {
          const parsed = parseDateMacroToTimestamp(r.value);
          fromDate = parsed.fromDate;
          toDate = parsed.toDate;
        }

        return {
          field: r.fieldKey,
          operator: r.operator,
          value: r.operator === FilterOperator.IsNull || r.operator === FilterOperator.IsNotNull ? '' : r.value,
          fromDate,
          toDate,
        };
      });
    onApply(nextRules);
    onClose();
  };

  const fieldOptions = fields.map(f => ({ label: f.label, value: f.key }));
  const usedKeys = rows.map(r => r.fieldKey);

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      disableScrollLock
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      slotProps={{
        paper: {
          sx: {
            mt: `${offset?.y ?? 8}px`,
            ml: `${offset?.x ?? 0}px`,
            width: 'max-content',
            minWidth: '800px',
            maxWidth: 'calc(100vw - 48px)',
            boxShadow: 4,
            overflow: 'hidden',
          },
        },
      }}
    >
      <Stack sx={{ backgroundColor: COLOR.NEUTRAL[50], padding: STYLE.PADDING_BOX_DETAIL_SECTION }}>
        <Stack>
          <StackRowAlignCenterJustBetween>
            <Typography sx={{ ...STYLE.TYPOGRAPHY.textMd.semiBold }}>{title}</Typography>
            <IconButton onClick={onClose} sx={{ padding: STYLE.PADDING_GAP_ITEM_SMALL }}>
              <IconElement icon='close' />
            </IconButton>
          </StackRowAlignCenterJustBetween>

          <Stack>
            {rows.length === 0 && (
              <Typography sx={{ color: COLOR.NEUTRAL[400], fontStyle: 'italic' }}>
                Chưa có điều kiện lọc nào được áp dụng.
              </Typography>
            )}

            {rows.map((row, index) => {
              const field = fields.find(f => f.key === row.fieldKey);
              if (!field) return null;

              const isDateField = field.type === 'date';
              if (fullOperator) {
                operatorOptions = FULL_OPERATOR_OPTIONS;
              }
              const activeOperatorOptions = isDateField ? DATE_OPERATOR_OPTIONS : operatorOptions;
              const isValueDisabled =
                row.operator === FilterOperator.IsNull || row.operator === FilterOperator.IsNotNull;

              const availableFieldOptions = fieldOptions.filter(
                opt => !usedKeys.includes(opt.value) || opt.value === row.fieldKey,
              );

              return (
                <StackRowAlignCenter
                  key={row.id}
                  onDragOver={e => e.preventDefault()}
                  onDrop={() => handleDrop(index)}
                  sx={{ gap: STYLE.PADDING_GAP_ITEM }}
                >
                  <Stack
                    draggable
                    onDragStart={() => setDraggingIndex(index)}
                    onDragEnd={() => setDraggingIndex(null)}
                    sx={{ cursor: 'grab' }}
                  >
                    <IconElement icon='drag_indicator' sx={{ color: COLOR.NEUTRAL[400] }} />
                  </Stack>

                  <Stack sx={{ width: FIELD_WIDTH }}>
                    <TextFieldSelectElement
                      label=''
                      value={row.fieldKey}
                      options={availableFieldOptions}
                      placeholder=''
                      onChange={e => {
                        const nextKey = e.target.value as string;
                        const nextField = fields.find(f => f.key === nextKey);
                        if (nextField) {
                          handleUpdateRow(index, {
                            fieldKey: nextKey,
                            value: nextField.defaultValue,
                            operator: FilterOperator.Equals,
                          });
                        }
                      }}
                    />
                  </Stack>

                  <Stack sx={{ width: OPERATOR_WIDTH }}>
                    <TextFieldSelectElement
                      label=''
                      value={row.operator}
                      options={activeOperatorOptions}
                      placeholder=''
                      onChange={e => {
                        const nextOp = e.target.value as FilterOperator;
                        let nextValue = row.value;

                        handleUpdateRow(index, { operator: nextOp, value: nextValue });
                      }}
                      sx={{ width: OPERATOR_WIDTH }}
                    />
                  </Stack>

                  <Stack sx={{ flex: 1, minWidth: VALUE_WIDTH }}>
                    {isValueDisabled ? (
                      <TextFieldSelectElement label='' value='' options={[]} placeholder='---' disabled />
                    ) : (
                      <FilterValueInput
                        field={field}
                        rowValue={row.value}
                        onChange={newValue => handleUpdateRow(index, { value: newValue })}
                      />
                    )}
                  </Stack>

                  <IconButton onClick={() => handleRemove(index)}>
                    <IconElement icon='delete_outline' />
                  </IconButton>
                </StackRowAlignCenter>
              );
            })}
          </Stack>

          {rows.length < fields.length && (
            <ButtonElement content='Thêm điều kiện' onClick={handleAdd} startIcon='add' variant='text' />
          )}

          <StackRowAlignCenterJustBetween sx={{ marginTop: STYLE.PADDING_GAP_SECTION_BOTTOM }}>
            <Stack onClick={handleReset} sx={{ cursor: 'pointer', color: COLOR.PRIMARY[500] }}>
              Mặc định
            </Stack>
            <StackRowAlignCenter sx={{ gap: 1 }}>
              <ButtonElement
                onClick={onClose}
                variant='outlined'
                content={'Hủy'}
                sx={{ borderRadius: BORDER_RADIUS_ELEMENT_SMALL }}
              />

              <ButtonElement
                onClick={handleApply}
                variant='contained'
                content={'Áp dụng'}
                sx={{ borderRadius: BORDER_RADIUS_ELEMENT_SMALL }}
              />
            </StackRowAlignCenter>
          </StackRowAlignCenterJustBetween>
        </Stack>
      </Stack>
    </Popover>
  );
};
