import React from 'react';

export default function Controls({
	onZoomInClick,
	onZoomOutClick,
	onLogClick,
	onNextClick,
	enabled
}) {
	return (
		<div className="map-controls">
			<button disabled={!enabled} onClick={onZoomInClick}>
				zoom in
			</button>
			<button disabled={!enabled} onClick={onZoomOutClick}>
				zoom out
			</button>
			<button disabled={!enabled} onClick={onLogClick}>
				log the view
			</button>
			<button disabled={!enabled} onClick={onNextClick}>
				thank u next
			</button>
		</div>
	);
}
