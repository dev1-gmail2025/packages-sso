import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import React from 'react';
import { SnackbarProvider } from './hooks/use-snackbar.hook';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <SnackbarProvider>
            <App />
          </SnackbarProvider>
        </LocalizationProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
);
