import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.scss';
import reportWebVitals from './reportWebVitals';
import { datadogRum } from '@datadog/browser-rum';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
// Configuración de Datadog RUM
datadogRum.init({
  applicationId: 'dfcbfabe-6141-4b4c-b5a2-cba59155847a',
  clientToken: 'pub1545a865890f72ab861059a7e1adeed5',
  site: 'us5.datadoghq.com',
  service: 'mit_test',
  env: 'development', 
  sessionSampleRate: 100,
  sessionReplaySampleRate: 20,
  trackUserInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel: 'mask-user-input',
});
