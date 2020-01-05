import React, { Component } from 'react';
import { getData } from '../api';
import { Vehicle } from './Vehicle';

export default class VehicleList extends Component {

	constructor(props) {
		super(props);

		this.state = {
			data: null
		}
	}

	componentDidMount() {
		getData("/api/vehicle", (data) => {
			this.setState({data})
		});
	}

	render() {
		if(this.state.data) {
		    return (
				<div className="c-vehicle-list">
					{this.state.data.vehicles.map(data => <Vehicle data={data} />)}
				</div>
			)
	    }

		return (<h1>Loading...</h1>);
	}
}