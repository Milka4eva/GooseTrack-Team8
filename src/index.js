import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import ChangeThemeProvider from 'components/ChangeThemeProvider/ChangeThemeProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <Router basename="/GooseTrack-Team8">
          <ChangeThemeProvider>
            <App />
          </ChangeThemeProvider>
        </Router>
      </Provider>
    </PersistGate>
  </React.StrictMode>
);
