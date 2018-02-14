import React, { Component } from 'react';
import { Modal, Button, FormGroup, Row, Col, FormControl } from 'react-bootstrap';
import { closeModal } from '../../actions/modal'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

const AddEstoqueModal = (props) => {
    return (
        <div>
            <Modal.Header>                    
                <Modal.Title> { props.modalInfo.index === "" ? '' : props.products[props.modalInfo.index].product }</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <FormGroup>
                    <Row>
                        <Col sm={12} lg={3}>
                            Preço
                        </Col>
                        <Col sm={12} lg={9}>
                            <FormControl type="number" />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} lg={3}>
                            Quantidade
                        </Col>
                        <Col sm={12} lg={9}>
                            <FormControl type="number" />
                        </Col>
                    </Row>
                </FormGroup>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={ props.closeModal.bind(this) }>Close</Button>
                <Button bsStyle="primary">Save changes</Button>
            </Modal.Footer>
        </div>
    )
}

function mapStateToProps({ products, modalInfo }) {
    return { products, modalInfo };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ closeModal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEstoqueModal);
