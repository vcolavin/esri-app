import React from 'react';
import ReactDOM from 'react-dom';
import { Map } from '@esri/react-arcgis';

ReactDOM.render(
	<div style={{ height: '500px', width: '1000px' }}>
		<Map />
	</div>,
	document.getElementById('root')
);
