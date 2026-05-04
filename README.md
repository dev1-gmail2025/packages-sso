# Sevago SSO Frontend Library

<div align="center">

A comprehensive Single Sign-On (SSO) frontend library built with React, TypeScript, and Material-UI.

[![npm version](https://img.shields.io/npm/v/sevago-library)](https://www.npmjs.com/package/sevago-library)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</div>

---

## Support

- **GitHub Issues:** [https://github.com/dev1-gmail2025/sevago-library/issues](https://github.com/dev1-gmail2025/sevago-library/issues)
- **Repository:** [https://github.com/dev1-gmail2025/sevago-library](https://github.com/dev1-gmail2025/sevago-library)
- **Material Symbols:** [https://fonts.google.com/icons](https://fonts.google.com/icons)

## Features

- 🎨 Material-UI components with custom styling and theming
- 📱 Responsive design with mobile support
- 🎯 Full TypeScript support
- 🎭 Framer Motion animations
- 📊 System monitoring components
- 🔧 Utility functions and constants

---

## Installation

```bash
npm install sevago-library
```

### Peer Dependencies

```bash
npm install react@^19.2.0 react-dom@^19.2.0 @emotion/react@>=11 @emotion/styled@>=11 @mui/material@>=5 @mui/system@>=5 @reduxjs/toolkit@^2.9.2 react-redux@^9.2.0 react-router-dom@^7.9.5 redux-persist@^6.0.0
```

---

## Quick Start

### Basic Setup

```tsx
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import App from 'sevago-library';

function RootApp() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default RootApp;
```

---

### Constants

#### Style Constants

```tsx
import { STYLE, MODE, OPACITY } from 'sevago-library';

const customStyle = {
  padding: STYLE.PADDING_GAP_LAYOUT,
  borderRadius: STYLE.BORDER_RADIUS_ELEMENT,
  height: STYLE.HEIGHT_DEFAULT_TEXT_FIELD_BUTTON,
};
```

#### Theme Modes

```tsx
import { MODE } from 'sevago-library';
import { createTheme } from '@mui/material/styles';

const theme = createTheme(MODE.light); // or MODE.dark or MODE.other
```

#### Opacity Constants

```tsx
import { MODE, OPACITY } from 'sevago-library';

const semiTransparent = `${MODE.light.palette.primary.main}${OPACITY[50]}`;
```

### Utilities

#### Time Utils

```tsx
import { timeUtils } from 'sevago-library';

const timeAgo = timeUtils.getTimeAgo(new Date());
const dateTime = timeUtils.getDateTime(new Date());
const date = timeUtils.getDate(new Date());
```

#### String Utils

```tsx
import { stringUtils } from 'sevago-library';

// Use string utility functions
```

#### App Utils

```tsx
import { Environment, getCurrentEnvironment } from 'sevago-library';

// Get current environment based on hostname
const env = getCurrentEnvironment();
// Returns: Environment.DEVELOP | Environment.STAGING | Environment.PRODUCTION

// Environment enum values
const develop = Environment.DEVELOP; // "develop"
const staging = Environment.STAGING; // "staging"
const production = Environment.PRODUCTION; // "production"
```

### Enums

```tsx
import { AppCategory, Mode, OrderType, Environment } from 'sevago-library';

// Use enums
const category = AppCategory.ALL;
const mode = Mode.LIGHT;
const order = OrderType.ASC;
const env = Environment.DEVELOP;
```

---

## API Reference

### Components

| Component                  | Description                                       | Props                                                                                                                                                                                                                         |
| -------------------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `App`                      | Main application component with theme provider    | None                                                                                                                                                                                                                          |
| `SystemMonitorScreen`      | System monitoring dashboard screen                | `env: Environment`, `blacklist?: string[]`                                                                                                                                                                                    |
| `AppGrid`                  | Application grid component with smart URL routing | `apps: AppInfo[]`, `env: Environment`, `columns?: number`, `rows?: number`, `iconSize?: number`, `iconRadius?: number`, `gap?: number \| string`, `showPagination?: boolean`, `titleVariant?`, `titleColor?`, `captionColor?` |
| `AppsSidebar`              | Applications sidebar component                    | `isOpen: boolean`, `onClose: () => void`, `env: Environment`, `position?: "left" \| "right"`, `blacklist?: string[]`                                                                                                          |
| `SystemMonitorSidebarPart` | System monitor sidebar part                       | -                                                                                                                                                                                                                             |

## TypeScript Support

Full TypeScript support with comprehensive type definitions:

```tsx
import type { AppInfo, AppGridProps, SystemMonitorScreenProps, AppsSidebarProps, Environment } from 'sevago-library';

// AppInfo interface
interface AppInfo {
  path: {
    develop: string;
    staging: string;
    production: string;
  };
  content: string;
  color: string;
  icon: string;
  group: AppGroup;
}
```

---

## Development

### Prerequisites

- Node.js >= 16.x
- npm >= 7.x

### Getting Started

```bash
# Clone the repository
git clone https://github.com/dev1-gmail2025/sevago-library.git
cd sevago-library

# Install dependencies
npm install

# Run development server
npm run dev

# Build library
npm run build:lib

# Lint code
npm run lint
```

---

<div align="center">

**Made with ❤️ for the Sevago SSO ecosystem**

</div>
