import { Box, Stack, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import { COLOR, otherUtil, stringUtil, STYLE } from '../../../../common';
import { FileWithPreview, FileWithPreviewOrUrl } from '../../../../common/interfaces/file.interface';
import { getFileSource } from '../../../../common/utils/file.utils';
import { LoadingComponent } from '../../../loading';
import { StackRow } from '../../../styles';
import { AvatarElement } from '../avatar.element';

export interface AvatarUserInfoUpdateProps {
  title?: string;
  nameFile?: string;
  url?: FileWithPreviewOrUrl;
  positions?: string[];
  onChange?: (file: FileWithPreview | null) => void;
  loading?: boolean;
}

export const AvatarUserInfoUpdate: React.FC<AvatarUserInfoUpdateProps> = ({
  title = 'Ảnh đại diện',
  nameFile = 'PNG, JPG dưới 5MB',
  url,
  onChange,
  loading: loadingProps = false,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState(loadingProps);

  return (
    <StackRow sx={{ alignItems: 'center', gap: STYLE.PADDING_GAP_ITEM }}>
      <Box sx={{ position: 'relative', width: 80, height: 80 }}>
        <AvatarElement
          url={getFileSource(url)}
          sx={{
            width: 80,
            height: 80,
            filter: loading ? COLOR.COMMON.gray : 'none',
            opacity: loading ? 0.6 : 1,
            transition: 'filter 120ms ease, opacity 120ms ease',
          }}
          imgProps={{
            onLoad: () => setLoading(false),
            onError: () => setLoading(false),
          }}
        />
        {loading && (
          <LoadingComponent
            size="small"
            sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          />
        )}
      </Box>
      <Stack sx={{ gap: 0 }}>
        <Typography
          sx={{
            ...STYLE.TYPOGRAPHY.textSm.bold,
            ...otherUtil.getLimitLineCss(1),
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{ ...STYLE.TYPOGRAPHY.textXs.regular, ...otherUtil.getLimitLineCss(1), color: COLOR.COMMON.gray3 }}
        >
          {nameFile}
        </Typography>

        <Stack>
          <input
            ref={fileInputRef}
            type="file"
            accept={'.jpg,.jpeg,.png,.gif,.bmp,.webp,.svg'}
            style={{ display: 'none' }}
            onChange={(e) => {
              const file = e.target.files && e.target.files[0];
              if (file && onChange) {
                setLoading(true);
                const fileWithPreview: FileWithPreview = Object.assign(file, {
                  preview: URL.createObjectURL(file),
                });
                onChange(fileWithPreview);
              }
              // reset value to allow selecting same file again if needed
              if (fileInputRef.current) fileInputRef.current.value = '';
            }}
          />
          <StackRow gap={STYLE.PADDING_GAP_BUTTON}>
            <Typography
              sx={{
                ...STYLE.TYPOGRAPHY.textSm.regular,
                color: COLOR.COMMON.green3,
                cursor: 'pointer',
              }}
              onClick={() => fileInputRef.current?.click()}
            >
              Thay đổi
            </Typography>
            <Typography
              sx={{
                ...STYLE.TYPOGRAPHY.textSm.regular,
                color: COLOR.COMMON.gray5,
                cursor: 'pointer',
              }}
              onClick={() => {
                if (onChange && !stringUtil.isEmpty(url)) {
                  setLoading(false);
                  onChange(null);
                }
              }}
            >
              Xóa ảnh
            </Typography>
          </StackRow>
        </Stack>
      </Stack>
    </StackRow>
  );
};
