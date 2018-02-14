import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProducts } from '../../actions/index';
import { closeModal, openModal } from '../../actions/modal';
import { Table, Modal } from 'react-bootstrap';
import QuantityRow from '../components/QuantityRow';
// import AddEstoqueModal from '../components/AddEstoqueModal'
// import RemoveEstoqueModal from '../components/RemoveEstoqueModal';
import ModalGeneral from '../components/ModalGeneral';
import './Home.css';

class Home extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {		
		this.props.fetchProducts();
	}

	addEstoque = (index) => {
        this.props.openModal("ADD", index);
	}

	removeEstoque = (index) => {
        this.props.openModal("REMOVE", index);
	}

	render() {
		return (
			<div>
				<Table striped condensed hover responsive>
					<thead>
						<tr>
							<th>Produto</th>
							<th>Quantidade</th>
						</tr>
					</thead>
					<tbody>
						{
							(this.props.products || []).map((product, index) => (
								<tr key={ product.id }>
									<td>{ product.product }</td>
									<td className="input-group">
										<QuantityRow index={ index } quantity={ product.quantity } addEstoque={ this.addEstoque } removeEstoque={ this.removeEstoque }/>
									</td>
								</tr>
							))
						}
					</tbody>
				</Table>

				<ModalGeneral />
			</div>
		);
	}
}

function mapStateToProps({ products }) {
  return { products };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchProducts, openModal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
