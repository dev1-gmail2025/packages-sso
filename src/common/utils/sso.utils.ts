// SSO Utility for cross-domain authentication
export interface SSOToken {
  userId: string;
  userType: string;
  email: string;
  name: string;
  exp: number; // expiration timestamp
}

// Generate SSO token (this would normally be done by your backend)
export const generateSSOToken = (userData: any): string => {
  const token: SSOToken = {
    userId: userData.id,
    userType: userData.type,
    email: userData.email,
    name: userData.name,
    exp: Date.now() + 5 * 60 * 1000, // 5 minutes expiry
  };

  // Simple base64 encoding (in production, use proper JWT with signature)
  return btoa(JSON.stringify(token));
};

// Validate SSO token
export const validateSSOToken = (token: string): SSOToken | null => {
  try {
    const decoded = JSON.parse(decodeURIComponent(token)) as SSOToken;

    // Check if token is expired
    if (Date.now() > decoded.exp) {
      return null;
    }

    return decoded;
  } catch {
    return null;
  }
};

// Store SSO token in localStorage
export const storeSSOToken = (token: string): void => {
  localStorage.setItem('sso_token', token);
};

// Get SSO token from localStorage
export const getSSOToken = (): string | null => {
  return localStorage.getItem('sso_token');
};

// Clear SSO token
export const clearSSOToken = (): void => {
  localStorage.removeItem('sso_token');
};

// Create SSO URL with token
export const createSSOUrl = (baseUrl: string, token: string): string => {
  const url = new URL(baseUrl);
  url.searchParams.set('sso_token', token);
  return url.toString();
};

// Restore account from SSO token
export const restoreAccountFromSSO = (): boolean => {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const ssoToken = urlParams.get('sso_token');

    if (ssoToken) {
      const tokenData = validateSSOToken(ssoToken);

      if (tokenData) {
        // Reconstruct account data from SSO token
        const accountData = {
          isLogin: true,
          user: {
            id: tokenData.userId,
            name: tokenData.name,
            email: tokenData.email,
            type: tokenData.userType,
          },
          accessToken: '', // Will be refreshed by the app
          refreshToken: '', // Will be refreshed by the app
          fcmToken: '',
          notificationCount: 0,
          userUnitPositionId: '',
          sidebarCountObj: {},
          current_access: 'sevago-hrm',
        };

        // Create persist:root structure
        const persistRoot = JSON.stringify({
          system: '{"mode":"light"}',
          account: JSON.stringify(accountData),
          remainingWeight: '{"weight":0}',
          _persist: '{"version":1,"rehydrated":true}',
        });

        // Save to localStorage
        localStorage.setItem('persist:root', persistRoot);

        // Store token for future use
        storeSSOToken(ssoToken);

        // Clean up URL
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.delete('sso_token');
        window.history.replaceState({}, '', newUrl.toString());

        // Reload to rehydrate Redux
        window.location.reload();

        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } catch {
    return false;
  }
};
