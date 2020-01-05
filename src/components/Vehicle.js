import React, { Component } from 'react';
import { getData } from '../api';

export class Vehicle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            vehicle: props.data
        };
    }

    componentDidMount() {
        getData(this.state.vehicle.url, (data) => {
            this.setState({ vehicle: Object.assign(this.state.vehicle, data) });
		});
    }

	render() {
        return (
            <div className="c-vehicle">
                <img className="c-vehicle__image"src={this.state.vehicle.media[0].url} />
                <h2 className="c-vehicle__title">{this.state.vehicle.id}</h2>
                <h3 className="c-vehicle__price">From {this.state.vehicle.price}</h3>
                <p className="c-vehicle__description">{this.state.vehicle.description}</p>
            </div>
        );
	}
}