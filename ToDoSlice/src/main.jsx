
import { createRoot } from 'react-dom/client'

import App from './App.jsx';
import store from './stote.jsx';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <Provider>
    <App />
  </Provider>
    

)
