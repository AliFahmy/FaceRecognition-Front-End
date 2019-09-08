import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import './App.css';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
const app = new Clarifai.App({
	apiKey: 'f171e14328664f4bb7354daf88e10a97'
});
const particlesOptions = {
	particles: {
		number: {
			value: 200,
			density: {
				enable: true,
				value_area: 800
			}
		}
	}
};
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			input: '',
			imgUrl: '',
			box: {},
			route: 'signin',
			isSignedIn: false
		};
	}
	displayFaceBox = newBox => {
		console.log(newBox);
		this.setState({ box: newBox });
	};
	calculateFaceLocation = data => {
		const clarifaiFace =
			data.outputs[0].data.regions[0].region_info.bounding_box;
		const image = document.getElementById('inputimage');
		const width = Number(image.width);
		const height = Number(image.height);
		return {
			leftCol: clarifaiFace.left_col * width,
			topRow: clarifaiFace.top_row * height,
			rightCol: width - clarifaiFace.right_col * width,
			bottomRow: height - clarifaiFace.bottom_row * height
		};
	};
	onSubmit = () => {
		this.setState({ imgUrl: this.state.input });
		app.models
			.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
			.then(response =>
				this.displayFaceBox(this.calculateFaceLocation(response))
			)
			.catch(err => console.log(err));
	};
	onInputChange = event => {
		this.setState({ input: event.target.value });
	};
	onRouteChange = route => {
		if (route === 'signout') {
			this.setState({ isSignedIn: false });
		} else if (route === 'home') {
			this.setState({ isSignedIn: true });
		}
		this.setState({ route: route });
	};
	render() {
		return (
			<div className='App'>
				<Particles className='particles' params={particlesOptions} />
				<Navigation
					isSignedin={this.state.isSignedIn}
					onRouteChange={this.onRouteChange}
				/>
				{this.state.route === 'home' ? (
					<div>
						<Logo></Logo>
						<Rank />
						<ImageLinkForm
							onInputChange={this.onInputChange}
							onSubmit={this.onSubmit}
						/>
						<FaceRecognition box={this.state.box} imgUrl={this.state.imgUrl} />
					</div>
				) : this.state.route === 'signin' ? (
					<Signin onRouteChange={this.onRouteChange}></Signin>
				) : (
					<Register onRouteChange={this.onRouteChange}></Register>
				)}
			</div>
		);
	}
}

export default App;
