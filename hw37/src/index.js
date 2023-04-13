//library imports
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
//local imports
import App from './App';
//styles
import './index.css';


const root = createRoot(document.getElementById('root'));

root.render(
	<StrictMode>
		<App/>
	</StrictMode>
);
