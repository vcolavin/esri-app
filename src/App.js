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

	interestingPlaces = [
		{
			center: [-116.21320351612056, 49.84303237985029],
			heading: 1.9329295879060624,
			tilt: 44.07144110097717,
			zoom: 8.87598716667097
		},
		{
			center: [24.99047616994002, 36.96071773026908],
			heading: 60.864769039881644,
			tilt: 54.431065663366866,
			zoom: 13.181380910258138
		},
		{
			zoom: 18.33330402527869,
			center: [-103.51288491192157, 58.669327091056914],
			tilt: 47.88913167442312,
			heading: 242.91613658808507
		},
		{
			zoom: 16.4719967140637,
			center: [33.10122297989086, -1.9654014353594775],
			tilt: 0.9833935056756364,
			heading: 359.9980784733905
		}
	];

	currentPlaceIndex = -1;

	thankUNext = () => {
		this.currentPlaceIndex += 1;

		if (this.currentPlaceIndex >= this.interestingPlaces.length) {
			this.currentPlaceIndex = 0;
		}

		this.state.view.goTo(this.interestingPlaces[this.currentPlaceIndex]);
	};

	logView = () => {
		const { zoom, center, camera } = this.state.view;

		const viewObj = {
			zoom,
			center: [center.longitude, center.latitude],
			tilt: camera.tilt,
			heading: camera.heading
		};

		console.log(JSON.stringify(viewObj));
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
					onLogClick={this.logView}
					onNextClick={this.thankUNext}
					enabled={this.state.mapLoaded}
				/>
			</div>
		);
	}
}
