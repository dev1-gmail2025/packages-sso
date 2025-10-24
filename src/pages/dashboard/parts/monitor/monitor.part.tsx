import { Stack } from '@mui/system';
import React, { ReactNode } from 'react';
import { STYLE } from '../../../../common/constant';
import { AvatarUserComponent } from '../../../../components/avatar-user/avatar-user.component';
import { BellComponent } from '../../../../components/bell/bell.component';
import { MAP_SIZE } from '../../../../components/elements/avatar/avatar-enum.enum';
import { ImageElement } from '../../../../components/elements/image/image.element';
import { ImageSizeType } from '../../../../components/elements/image/image.enum';
import { LogoComponent } from '../../../../components/logo/logo.component';
import { AppsSidebar } from '../../../../components/sidebar/apps-sidebar.component';
import { StackRowAlignCenter, StackRowJustBetween } from '../../../../components/styles/stack.style';
import { useSidebarState } from '../../../../hooks/use-apps.hook';

const MonitorPart = ({ children }: { children: ReactNode }) => {
  const { isSidebarOpen, closeSidebar, openSidebar } = useSidebarState();

  return (
    <Stack
      sx={{
        minHeight: '100vh',
        width: '100%',
        overflowY: 'auto',
        backgroundImage: "url('/images/image-dashboard.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Stack p={{ padding: STYLE.PADDING_GAP_LAYOUT }}>
        <StackRowJustBetween>
          <StackRowAlignCenter>
            <LogoComponent url={'/images/logo/logo-sub-3.svg'} fillColor="white" />
            <ImageElement
              url="/images/icon-apps-sidebar.svg"
              onClick={openSidebar}
              sizeType={ImageSizeType.SQUARE}
              sx={{ width: MAP_SIZE.medium.width, height: MAP_SIZE.medium.height }}
            />
          </StackRowAlignCenter>
          <StackRowAlignCenter>
            <BellComponent />
            <AvatarUserComponent />
          </StackRowAlignCenter>
        </StackRowJustBetween>

        {children}
      </Stack>
      <AppsSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </Stack>
  );
};

export default MonitorPart;
