import React from 'react';
import { Scene } from '@esri/react-arcgis';
import Controls from './Controls';

export default class App extends React.Component {
	initialZoom = 4;

	state = {
		map: null,
		view: null,
		mapLoaded: false
	};

	zoomIn = () => {
		this.state.view.goTo({ zoom: this.state.view.zoom + 1 });
	};

	zoomOut = () => {
		this.state.view.goTo({ zoom: this.state.view.zoom - 1 });
	};

	handleSceneLoad = (map, view) => {
		this.setState({ map, view, mapLoaded: true });
	};

	render() {
		return (
			<div className="map-wrapper">
				<Scene
					viewProperties={{
						center: [-122.4443, 47.2529],
						zoom: this.initialZoom
					}}
					onLoad={this.handleSceneLoad}
				/>
				<Controls
					onZoomInClick={this.zoomIn}
					onZoomOutClick={this.zoomOut}
					enabled={this.state.mapLoaded}
				/>
			</div>
		);
	}
}
