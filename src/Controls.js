import React from 'react';

export default function Controls({ onZoomInClick, onZoomOutClick, enabled }) {
	return (
		<div className="map-controls">
			<button disabled={!enabled} onClick={onZoomInClick}>
				zoom in
			</button>
			<button disabled={!enabled} onClick={onZoomOutClick}>
				zoom out
			</button>
		</div>
	);
}
