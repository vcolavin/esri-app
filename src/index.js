import React from 'react';
import ReactDOM from 'react-dom';
import { Map } from '@esri/react-arcgis';

import './style.scss';
import './reset.scss';

ReactDOM.render(
	<div
		className="esri-container"
		// style={{ height: '500px', width: '1000px' }}
	>
		<Map />
	</div>,
	document.getElementById('root')
);
