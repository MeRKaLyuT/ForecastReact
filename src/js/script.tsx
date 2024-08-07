import * as React from 'react';
import {createRoot} from 'react-dom/client';
import App from '../components/App';

// import * as serviceWorker from '../serviceWorker';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

