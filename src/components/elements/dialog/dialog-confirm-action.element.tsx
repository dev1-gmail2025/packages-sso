import { Typography } from '@mui/material';
import React from 'react';
import { SnackbarType, STYLE } from '../../../common';
import { DialogElement } from './dialog.element';

interface DialogConfirmActionElementProps {
  open: boolean;
  title: string;
  description: string;
  closeText?: string;
  confirmText?: string;
  confirmColor?: SnackbarType;
  closeColor?: SnackbarType;
  onClose: () => void;
  onConfirm: () => void;
  loading?: boolean;
}

export const DialogConfirmActionElement: React.FC<DialogConfirmActionElementProps> = ({
  open,
  title,
  description,
  closeText = 'Hủy',
  confirmText = 'Xác nhận',
  confirmColor = SnackbarType.INFO,
  closeColor = SnackbarType.INFO,
  onClose,
  onConfirm,
  loading = false,
}) => {
  return (
    <DialogElement
      sx={{ width: 450 }}
      open={open}
      onClose={onClose}
      label={title}
      nodeContent={<Typography sx={{ ...STYLE.TYPOGRAPHY.textSm.regular }}>{description}</Typography>}
      buttonLeft={{
        content: closeText,
        color: closeColor,
        onClick: onClose,
        loading,
      }}
      buttonRight={{
        content: confirmText,
        color: confirmColor,
        onClick: onConfirm,
        loading,
      }}
    />
  );
};
