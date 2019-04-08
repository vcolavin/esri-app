import React from 'react';
import { Scene } from '@esri/react-arcgis';
import { interestingPlaces } from './interestingPlaces';
import Controls from './Controls';

export default class App extends React.Component {
	state = {
		view: null,
		mapLoaded: false,
		placeIndex: -1
	};

	zoomIn = () => {
		this.state.view.goTo({ zoom: this.state.view.zoom + 1 });
	};

	zoomOut = () => {
		this.state.view.goTo({ zoom: this.state.view.zoom - 1 });
	};

	thankUNext = () => {
		this.setState(
			({ placeIndex }) => ({
				placeIndex:
					placeIndex >= interestingPlaces.length ? 0 : placeIndex + 1
			}),
			() => {
				const nextPlace = interestingPlaces[this.state.placeIndex];

				const tempCamera = this.state.view.camera.clone();
				tempCamera.position = {
					latitude: nextPlace.position.latitude,
					longitude: nextPlace.position.longitude
				};
				tempCamera.tilt = nextPlace.tilt;
				tempCamera.heading = nextPlace.heading;

				this.state.view.goTo(tempCamera);
			}
		);
	};

	logView = () => {
		const { camera } = this.state.view;

		const viewObj = {
			tilt: camera.tilt,
			heading: camera.heading,
			position: {
				longitude: camera.position.longitude,
				latitude: camera.position.latitude,
				z: camera.position.z
			}
		};

		console.log(JSON.stringify(viewObj));
	};

	handleSceneLoad = (_map, view) => {
		this.setState({ view, mapLoaded: true }, this.thankUNext);
	};

	render() {
		const currentPlace = interestingPlaces[this.state.placeIndex];

		return (
			<div className="map-wrapper">
				<Scene
					viewProperties={{
						center: [-122.4443, 47.2529],
						zoom: 4
					}}
					onLoad={this.handleSceneLoad}
					className="esri-scene"
				/>
				<h1 className="place-title">
					{currentPlace ? currentPlace.name : 'loading'}
				</h1>
				<Controls
					onLogClick={this.logView}
					onNextClick={this.thankUNext}
					enabled={this.state.mapLoaded}
				/>
			</div>
		);
	}
}
