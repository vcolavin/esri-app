import React from 'react';

export default function Controls({ onLogClick, onNextClick, enabled }) {
	return (
		<div className="map-controls">
			<button
				className="map-controls-button"
				disabled={!enabled}
				onClick={onLogClick}
			>
				log the view
			</button>
			<button
				className="map-controls-button"
				disabled={!enabled}
				onClick={onNextClick}
			>
				thank u next
			</button>
		</div>
	);
}
