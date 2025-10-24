// Utility to get account data for transfer
export const getAccountDataForTransfer = () => {
  try {
    // Redux persist stores everything under 'persist:root'
    const persistRootData = localStorage.getItem('persist:root');

    if (persistRootData) {
      // Return the entire persist:root data instead of extracting
      return {
        persistRoot: persistRootData,
        timestamp: Date.now(),
      };
    }

    return null;
  } catch (error) {
    console.error('Failed to get account data:', error);
    return null;
  }
};

// Utility to generate SSO token for cross-domain transfer
export const generateSSOTokenForTransfer = (): string => {
  try {
    const data = getAccountDataForTransfer();

    if (!data) {
      return '';
    }

    if (!data.persistRoot) {
      return '';
    }

    // Parse the persistRoot to extract user data
    try {
      const parsedData = JSON.parse(data.persistRoot);

      const accountData = JSON.parse(parsedData.account);

      if (!accountData.user) {
        return '';
      }

      // Generate SSO token with minimal fields required by target app
      const tokenData = {
        // user info
        ...accountData.user,
        userId: accountData.user.id,
        userType: accountData.user.type,
        email: accountData.user.email,
        name: accountData.user.name,
        // auth tokens
        accessToken: accountData.accessToken || '',
        refreshToken: accountData.refreshToken || '',
        // default org unit/position if available
        userUnitPositionId:
          (accountData.user &&
            Array.isArray(accountData.user.userOrgUnitPositions) &&
            accountData.user.userOrgUnitPositions[0]?.id) ||
          '',
        // expiry for the transfer token itself
        exp: Date.now() + 5 * 60 * 1000, // 5 minutes expiry
      };

      try {
        const jsonString = JSON.stringify(tokenData);

        // Use encodeURIComponent instead of btoa for better Unicode support
        const ssoToken = encodeURIComponent(jsonString);
        return ssoToken;
      } catch (encodeError) {
        console.error('Error during SSO token encoding:', encodeError);
        return '';
      }
    } catch (parseError) {
      console.error('Failed to parse account data:', parseError);
      return '';
    }
  } catch (error) {
    console.error('Failed to generate SSO token:', error);
    return '';
  }
};

// Utility to restore account data from URL parameters
export const restoreAccountFromUrl = (): boolean => {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const accountData = urlParams.get('account');

    if (accountData) {
      try {
        // Decode the essential data
        const decoded = atob(accountData);
        const essentialData = JSON.parse(decoded);

        // Reconstruct the full persist:root structure
        const fullAccountData = {
          isLogin: essentialData.isLogin,
          user: essentialData.user,
          accessToken: essentialData.accessToken,
          refreshToken: essentialData.refreshToken,
          fcmToken: '',
          notificationCount: 0,
          userUnitPositionId: '',
          sidebarCountObj: {},
          current_access: 'sevago-hrm',
        };

        const persistRoot = JSON.stringify({
          system: '{"mode":"light"}',
          account: JSON.stringify(fullAccountData),
          remainingWeight: '{"weight":0}',
          _persist: '{"version":1,"rehydrated":true}',
        });

        // Save to localStorage
        localStorage.setItem('persist:root', persistRoot);

        // Clean up URL parameters
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.delete('account');
        window.history.replaceState({}, '', newUrl.toString());

        // Force page reload to ensure Redux rehydrates with new data
        window.location.reload();

        return true;
      } catch (decodeError) {
        console.error('Failed to decode account data:', decodeError);
        return false;
      }
    } else {
      return false;
    }
  } catch (error) {
    console.error('Failed to restore account data from URL:', error);
    return false;
  }
};
