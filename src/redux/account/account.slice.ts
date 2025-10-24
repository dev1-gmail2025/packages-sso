import { createSlice } from '@reduxjs/toolkit';
import { ACTION_ACCOUNT } from '..';
import { CURRENT_ACCESS, GlobalAccountState } from './account.interface';

export const initialStateAccount: GlobalAccountState = {
  isLogin: false,
  user: null,
  accessToken: '',
  refreshToken: '',
  fcmToken: '',
  notificationCount: 0,
  userUnitPositionId: '',
  current_access: 'recruitment',
};

export const slice = createSlice({
  // Name Slice
  name: 'account',
  initialState: initialStateAccount,
  reducers: {},

  extraReducers: (builder) => {
    // Login
    builder.addCase(ACTION_ACCOUNT.login.fulfilled, (state, action) => {
      console.log(action.payload);
      state.isLogin = true;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.userUnitPositionId = state.userUnitPositionId || action.payload.user.userOrgUnitPositions[0].id;
    });

    // Logout
    builder.addCase(ACTION_ACCOUNT.logout.fulfilled, (state) => {
      state.isLogin = initialStateAccount.isLogin;
      state.user = initialStateAccount.user;
      state.accessToken = initialStateAccount.accessToken;
      state.refreshToken = initialStateAccount.refreshToken;
      state.fcmToken = initialStateAccount.fcmToken;
      state.userUnitPositionId = initialStateAccount.userUnitPositionId;
    });
    builder.addCase(ACTION_ACCOUNT.logout.rejected, (state) => {
      state.isLogin = initialStateAccount.isLogin;
      state.user = initialStateAccount.user;
      state.accessToken = initialStateAccount.accessToken;
      state.refreshToken = initialStateAccount.refreshToken;
      state.fcmToken = initialStateAccount.fcmToken;
      state.userUnitPositionId = initialStateAccount.userUnitPositionId;
    });

    // Reset password
    builder.addCase(ACTION_ACCOUNT.resetPassword.fulfilled, (state, action) => {
      state.isLogin = true;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.userUnitPositionId = state.userUnitPositionId || action.payload.user.userOrgUnitPositions[0].id;
    });

    // Refresh token
    builder.addCase(ACTION_ACCOUNT.refreshToken.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    });
    builder.addCase(ACTION_ACCOUNT.refreshToken.rejected, (state) => {
      state.isLogin = initialStateAccount.isLogin;
      state.user = initialStateAccount.user;
      state.accessToken = initialStateAccount.accessToken;
      state.refreshToken = initialStateAccount.refreshToken;
      state.fcmToken = initialStateAccount.fcmToken;
      state.userUnitPositionId = initialStateAccount.userUnitPositionId;
    });

    // Subscribe Topic
    builder.addCase(ACTION_ACCOUNT.subscribeTopic.fulfilled, (state, action) => {
      state.fcmToken = action.payload.fcmToken;
    });
    builder.addCase(ACTION_ACCOUNT.subscribeTopic.rejected, (state) => {
      state.fcmToken = initialStateAccount.fcmToken;
    });

    // Unsubscribe Topic
    builder.addCase(ACTION_ACCOUNT.unsubscribeTopic.fulfilled, (state) => {
      state.fcmToken = initialStateAccount.fcmToken;
    });
    builder.addCase(ACTION_ACCOUNT.unsubscribeTopic.rejected, (state) => {
      state.fcmToken = initialStateAccount.fcmToken;
    });

    // Change notification Count
    builder.addCase(ACTION_ACCOUNT.changeNotificationCount.fulfilled, (state, action) => {
      state.notificationCount = action.payload;
    });

    // Get account
    builder.addCase(ACTION_ACCOUNT.getAccount.fulfilled, (state, action) => {
      state.user = action.payload;
      state.userUnitPositionId = state.userUnitPositionId || action.payload.userOrgUnitPositions[0].id;
    });

    // Update position org unit
    builder.addCase(ACTION_ACCOUNT.updatePositionOrgUnit.fulfilled, (state, action) => {
      state.userUnitPositionId = action.payload;
    });

    builder.addCase(ACTION_ACCOUNT.updateCurrentAccess.fulfilled, (state, action) => {
      state.current_access = action.payload as CURRENT_ACCESS;
    });
  },
});

export const reducerAccount = slice.reducer;
