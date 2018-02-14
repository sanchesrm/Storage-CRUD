import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon, Label } from 'react-bootstrap';

class QuantityRow extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<FormGroup>
				<InputGroup>
					<InputGroup.Addon onClick={ this.props.removeEstoque.bind(this, this.props.index) } >
						<Glyphicon glyph="minus" />
					</InputGroup.Addon>
					<FormControl disabled type="text" value={ this.props.quantity } />
					<InputGroup.Addon onClick={ this.props.addEstoque.bind(this, this.props.index) } >
						<Glyphicon glyph="plus" />
					</InputGroup.Addon>
				</InputGroup>
			</FormGroup>
		);
	}
}

export default QuantityRow;