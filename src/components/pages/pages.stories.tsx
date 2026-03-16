import { AppBar, Box, Divider, Paper, Skeleton, Stack, Toolbar, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { MemoryRouter } from 'react-router-dom';

import {
  Breadcrumbs,
  CardStatisticsComponent,
  NoteComponent,
  PriceComponent,
  ReviewComponent,
  SystemMonitorScreen,
} from '..';
import {
  ButtonElement,
  CheckboxElement,
  DashedDividerElement,
  DialogConfirmActionElement,
  DialogElement,
  IconElement,
  PaginationElement,
  RadioElement,
  RadioGroupElement,
  SwitchElement,
  TabsComponent,
  TagElement,
  TextFieldElement,
  TimeAgoComponent,
  TooltipOnHoverElement,
  TypographyInfoRow,
  TypographyInfoUser,
} from '../elements';
import { ICONS } from '../../common';

const meta: Meta = {
  title: 'Pages/Samples',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    Story => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj;

const AdminShell = ({
  title,
  subtitle,
  children,
  sidebar,
  headerActions,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  headerActions?: React.ReactNode;
}) => {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f6f7fb' }}>
      <AppBar
        position='sticky'
        elevation={0}
        sx={{
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #eaecf0',
          color: '#101828',
        }}
      >
        <Toolbar sx={{ gap: 1.5 }}>
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: 1.5,
              display: 'grid',
              placeItems: 'center',
              background: 'linear-gradient(135deg, #1976d2 0%, #6a5acd 100%)',
              color: 'white',
              fontWeight: 800,
              letterSpacing: 0.5,
            }}
          >
            S
          </Box>

          <Box sx={{ minWidth: 0 }}>
            <Typography variant='subtitle1' sx={{ fontWeight: 800, lineHeight: 1.2 }} noWrap>
              {title}
            </Typography>
            {subtitle ? (
              <Typography variant='caption' color='text.secondary' noWrap>
                {subtitle}
              </Typography>
            ) : null}
          </Box>

          <Box sx={{ flex: 1 }} />

          {headerActions ?? (
            <Stack direction='row' spacing={1} alignItems='center'>
              <TooltipOnHoverElement content='Notifications'>
                <Box sx={{ cursor: 'pointer' }}>
                  <IconElement icon='notifications' />
                </Box>
              </TooltipOnHoverElement>
              <TooltipOnHoverElement content='Profile'>
                <Box sx={{ cursor: 'pointer' }}>
                  <IconElement icon='account_circle' />
                </Box>
              </TooltipOnHoverElement>
            </Stack>
          )}
        </Toolbar>
      </AppBar>

      <Box sx={{ display: 'flex' }}>
        <Box
          sx={{
            width: 260,
            display: { xs: 'none', md: 'block' },
            borderRight: '1px solid #eaecf0',
            backgroundColor: '#ffffff',
            minHeight: 'calc(100vh - 64px)',
            position: 'sticky',
            top: 64,
            alignSelf: 'flex-start',
          }}
        >
          <Stack spacing={1} sx={{ p: 2 }}>
            <Typography variant='caption' color='text.secondary' sx={{ fontWeight: 700 }}>
              Navigation
            </Typography>

            {sidebar ?? (
              <Stack spacing={0.5}>
                {[
                  { icon: 'dashboard', label: 'Dashboard' },
                  { icon: 'table_chart', label: 'Records' },
                  { icon: 'settings', label: 'Settings' },
                ].map(it => (
                  <Stack
                    key={it.label}
                    direction='row'
                    spacing={1}
                    alignItems='center'
                    sx={{
                      px: 1,
                      py: 1,
                      borderRadius: 1.5,
                      cursor: 'pointer',
                      '&:hover': { backgroundColor: '#f2f4f7' },
                    }}
                  >
                    <IconElement icon={it.icon} />
                    <Typography variant='body2' sx={{ fontWeight: 700 }}>
                      {it.label}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            )}
          </Stack>
        </Box>

        <Box sx={{ flex: 1, p: { xs: 2, md: 3 } }}>
          <Box sx={{ maxWidth: 1240, mx: 'auto' }}>{children}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export const DashboardPage: Story = {
  render: () => (
    <AdminShell title='Admin Dashboard' subtitle='Overview of activity, quality, and revenue'>
      <Stack spacing={2}>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Box>
            <Typography variant='h5' sx={{ fontWeight: 900, lineHeight: 1.2 }}>
              Dashboard
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Welcome back — here’s what’s happening.
            </Typography>
          </Box>

          <Stack direction='row' spacing={1}>
            <ButtonElement variant='outlined' content='Export' onClick={fn()} />
            <ButtonElement variant='contained' content='Create' onClick={fn()} />
          </Stack>
        </Stack>

        <Box
          sx={{
            display: 'grid',
            gap: 2,
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          }}
        >
          <CardStatisticsComponent
            label='Active users'
            count={1280}
            color='#1976d2'
            bgColor='#1976d2'
            icon={ICONS.iconApps}
          />
          <CardStatisticsComponent label='Errors' count={12} color='#d32f2f' bgColor='#d32f2f' icon={ICONS.iconApps} />
          <CardStatisticsComponent
            label='Revenue'
            count={999}
            color='#2e7d32'
            bgColor='#2e7d32'
            icon={ICONS.iconApps}
          />
        </Box>

        <Box
          sx={{
            display: 'grid',
            gap: 2,
            gridTemplateColumns: { xs: '1fr', md: '5fr 7fr' },
            alignItems: 'start',
          }}
        >
          <Paper variant='outlined' sx={{ borderRadius: 2, overflow: 'hidden' }}>
            <Box sx={{ p: 2, borderBottom: '1px solid #eaecf0' }}>
              <Typography variant='subtitle1' sx={{ fontWeight: 900 }}>
                Quick filters
              </Typography>
              <Typography variant='caption' color='text.secondary'>
                Narrow results quickly.
              </Typography>
            </Box>
            <Stack spacing={2} sx={{ p: 2 }}>
              <TextFieldElement label='Search' placeholder='Type to search...' showResetButton />
              <RadioGroupElement label='Status' name='status' value='all' onChange={fn()}>
                <RadioElement value='all' label='All' />
                <RadioElement value='active' label='Active' />
                <RadioElement value='archived' label='Archived' />
              </RadioGroupElement>
              <Stack direction='row' spacing={2} alignItems='center' justifyContent='space-between'>
                <CheckboxElement label='Only mine' onChange={fn()} />
                <Stack direction='row' spacing={1} alignItems='center'>
                  <Typography variant='caption' color='text.secondary'>
                    Live updates
                  </Typography>
                  <SwitchElement value={false} onChange={fn()} />
                </Stack>
              </Stack>
            </Stack>
          </Paper>
          <Paper variant='outlined' sx={{ borderRadius: 2, overflow: 'hidden' }}>
            <Box sx={{ p: 2, borderBottom: '1px solid #eaecf0' }}>
              <Typography variant='subtitle1' sx={{ fontWeight: 900 }}>
                Highlights
              </Typography>
              <Typography variant='caption' color='text.secondary'>
                Key signals for today.
              </Typography>
            </Box>
            <Stack spacing={1} sx={{ p: 2 }}>
              <TypographyInfoRow label='Last sync' value={<TimeAgoComponent time={new Date()} />} />
              <TypographyInfoRow label='Rating' value={<ReviewComponent averageRating={4.8} reviewCount={123} />} />
              <TypographyInfoRow
                label='Price'
                value={<PriceComponent price={99.9} originalPrice={149.9} discountPercent={33} />}
              />
              <NoteComponent type='recommend' content='Check system monitor for deployment health.' />
            </Stack>
          </Paper>
        </Box>

        <Paper variant='outlined' sx={{ borderRadius: 2, overflow: 'hidden' }}>
          <Box sx={{ p: 2, borderBottom: '1px solid #eaecf0', display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant='subtitle1' sx={{ fontWeight: 900, flex: 1 }}>
              Records
            </Typography>
            <TagElement content='New' type='#4CAF50' variant='contained' size='small' />
            <TooltipOnHoverElement content='This is a tooltip'>
              <Typography variant='caption' sx={{ cursor: 'help' }}>
                Help
              </Typography>
            </TooltipOnHoverElement>
          </Box>

          <Box sx={{ p: 2 }}>
            <Stack spacing={1.5}>
              <Stack direction='row' spacing={2} alignItems='center'>
                <Skeleton variant='text' width={160} />
                <Skeleton variant='text' width={120} />
                <Box sx={{ flex: 1 }} />
                <Skeleton variant='rounded' width={90} height={32} />
              </Stack>
              <DashedDividerElement />
              <Stack spacing={1}>
                {Array.from({ length: 6 }).map((_, i) => (
                  <Stack key={i} direction='row' spacing={2} alignItems='center'>
                    <Skeleton variant='circular' width={28} height={28} />
                    <Skeleton variant='text' width={240} />
                    <Skeleton variant='text' width={140} />
                    <Box sx={{ flex: 1 }} />
                    <Skeleton variant='rounded' width={80} height={26} />
                  </Stack>
                ))}
              </Stack>
              <Stack direction='row' justifyContent='flex-end'>
                <PaginationElement total={97} take={10} page={1} onChange={fn()} />
              </Stack>
            </Stack>
          </Box>
        </Paper>
      </Stack>
    </AdminShell>
  ),
};

export const FormAndDialogsPage: Story = {
  render: () => (
    <AdminShell title='Admin Forms' subtitle='Create / edit flows with preview and dialogs'>
      <Stack spacing={2}>
        <Breadcrumbs content='Create item' showBackButton />

        <Paper variant='outlined' sx={{ borderRadius: 2, overflow: 'hidden' }}>
          <Box sx={{ p: 2, borderBottom: '1px solid #eaecf0', display: 'flex', alignItems: 'center' }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant='subtitle1' sx={{ fontWeight: 900 }}>
                Basic info
              </Typography>
              <Typography variant='caption' color='text.secondary'>
                Required fields, validation, and preview.
              </Typography>
            </Box>
            <Stack direction='row' spacing={1}>
              <ButtonElement variant='outlined' content='Cancel' onClick={fn()} />
              <ButtonElement variant='contained' content='Save' onClick={fn()} />
            </Stack>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '7fr 5fr' },
              alignItems: 'stretch',
            }}
          >
            <Box sx={{ p: 2 }}>
              <Stack spacing={2}>
                <TextFieldElement label='Name' placeholder='Enter name...' required showResetButton />
                <TextFieldElement label='Email' placeholder='Enter email...' iconLabel='mail' showResetButton />
                <TextFieldElement label='Description' placeholder='Multiline...' rows={3} showResetButton={false} />
                <Stack direction='row' spacing={2} alignItems='center' justifyContent='space-between'>
                  <CheckboxElement label='Active' onChange={fn()} />
                  <Stack direction='row' spacing={1} alignItems='center'>
                    <Typography variant='caption' color='text.secondary'>
                      Notifications
                    </Typography>
                    <SwitchElement value={true} onChange={fn()} />
                  </Stack>
                </Stack>
              </Stack>
            </Box>

            <Box
              sx={{
                borderLeft: { xs: 'none', md: '1px solid #eaecf0' },
              }}
            >
              <Box sx={{ p: 2 }}>
                <Typography variant='subtitle2' sx={{ fontWeight: 900, mb: 1 }}>
                  Preview
                </Typography>
                <TypographyInfoUser
                  columns={1}
                  items={[
                    { label: 'Full name', value: 'Nguyễn Văn A' },
                    { label: 'Department', value: 'Engineering' },
                    { label: 'Phone', value: '' },
                    { label: 'Email', value: 'a.nguyen@example.com' },
                  ]}
                  highlightQuery='eng'
                />
              </Box>
            </Box>
          </Box>
        </Paper>

        <Paper variant='outlined' sx={{ borderRadius: 2, p: 2 }}>
          <Typography variant='subtitle2' sx={{ fontWeight: 900, mb: 1 }}>
            Dialog examples (closed by default)
          </Typography>
          <Stack direction='row' spacing={1}>
            <DialogElement
              label='Dialog title'
              open={false}
              onClose={fn()}
              nodeContent={<Typography variant='body2'>Dialog content</Typography>}
              buttonRight={{ content: 'Close', onClick: fn() }}
            />
            <DialogConfirmActionElement
              open={false}
              title='Confirm action'
              description='Are you sure?'
              closeText='Cancel'
              confirmText='Confirm'
              confirmColor={'error' as any}
              closeColor={'info' as any}
              onClose={fn()}
              onConfirm={fn()}
            />
          </Stack>
        </Paper>
      </Stack>
    </AdminShell>
  ),
};
