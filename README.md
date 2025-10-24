# @sevago/sso-fe

Lightweight SSO Frontend Package with essential components for authentication, apps sidebar, and system monitoring.

## 🚀 Core Features

- **Apps Sidebar**: Dynamic sidebar with app navigation
- **System Monitor**: Real-time system monitoring dashboard
- **Image Element**: Reusable image component with preview
- **SSO Integration**: Cross-domain authentication utilities
- **Redux Store**: Essential state management
- **TypeScript Support**: Full type safety

## 📦 Installation

```bash
npm install @sevago/sso-fe
```

## 🎯 Quick Start

### Basic Usage

```tsx
import React from 'react';
import { AppsSidebar, SystemMonitorScreen, ImageElement, useApps, useSidebarState } from '@sevago/sso-fe';

function App() {
  const { isSidebarOpen, openSidebar, closeSidebar } = useSidebarState();
  const apps = useApps();

  return (
    <div>
      <AppsSidebar
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
        onAppClick={(app) => console.log('App clicked:', app)}
      />

      <SystemMonitorScreen />

      <ImageElement src="/path/to/image.jpg" alt="Description" size="medium" />
    </div>
  );
}
```

### Redux Integration

```tsx
import { Provider } from 'react-redux';
import { store } from '@sevago/sso-fe';

function App() {
  return <Provider store={store}>{/* Your app components */}</Provider>;
}
```

### SSO Integration

```tsx
import { generateSSOTokenForTransfer, restoreAccountFromSSO, createSSOUrl } from '@sevago/sso-fe';

// Generate SSO token for cross-domain transfer
const ssoToken = generateSSOTokenForTransfer({
  userId: 'user123',
  name: 'John Doe',
  email: 'john@example.com',
  userType: 'Admin',
});

// Create SSO URL
const ssoUrl = createSSOUrl('https://target-domain.com', ssoToken, '/dashboard');

// Restore account from SSO token (call on target domain)
restoreAccountFromSSO();
```

## 🧩 Components

### AppsSidebar

Dynamic sidebar component for app navigation.

```tsx
<AppsSidebar
  isOpen={boolean}
  onClose={() => void}
  onAppClick={(app: AppModule) => void}
  onHomeClick={() => void}
  selectedAppId?: string
  onNavigate?: (path: string) => void
/>
```

### SystemMonitorScreen

Real-time system monitoring dashboard.

```tsx
<SystemMonitorScreen />
```

### ImageElement

Reusable image component with preview functionality.

```tsx
<ImageElement
  src={string}
  alt={string}
  size?: 'small' | 'medium' | 'large' | 'xlarge'
  preview?: boolean
  onRemove?: () => void
/>
```

## 🎣 Hooks

### useApps

Get filtered apps based on user type and category.

```tsx
const apps = useApps(AppCategory.ALL);
```

### useSidebarState

Manage sidebar open/close state.

```tsx
const { isSidebarOpen, openSidebar, closeSidebar, toggleSidebar } = useSidebarState();
```

### useSnackbar

Show snackbar notifications.

```tsx
const { showSnackbar } = useSnackbar();
showSnackbar('Success message', 'success');
```

## 🔧 Configuration

### Apps Configuration

Configure your apps in the constants:

```tsx
import { APPS_CONFIG, APP_DOMAINS } from '@sevago/sso-fe';

// Apps are pre-configured with:
// - Formula Price
// - E-Catalogue
// - Landing Pages
// - HRM Apps
// - Platform Apps
```

### Theme Configuration

The package includes light/dark mode support:

```tsx
import { MODE } from '@sevago/sso-fe';

// MODE.light - Light theme
// MODE.dark - Dark theme
```

## 🌐 Cross-Domain SSO

The package includes complete SSO solution for cross-domain authentication:

1. **Generate SSO Token**: Create time-limited token with user data
2. **SSO Bridge**: Deploy `sso-bridge.html` on target domains
3. **Token Validation**: Automatic token validation and account restoration
4. **Redux Persist**: Seamless state transfer between domains

## 📁 File Structure

```
@sevago/sso-fe/
├── components/          # UI Components
├── hooks/              # Custom Hooks
├── layouts/            # Layout Components
├── pages/              # Page Components
├── redux/              # Redux Store
├── common/             # Shared Utilities
├── apis/               # API Services
└── router/             # Routing
```

## 🔗 Dependencies

- React 18+
- Material-UI 7+
- Redux Toolkit
- TypeScript 5+
- Framer Motion

## 📄 License

MIT

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📞 Support

For support, email support@sevago.com or create an issue in the repository.
