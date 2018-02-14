import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import AddEstoqueModal from './AddEstoqueModal';
import RemoveEstoqueModal from './RemoveEstoqueModal';
import { closeModal, openModal } from "../../actions/modal";
import { connect } from "react-redux";

class ModalGeneral extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let contentToShow;

        if (this.props.modalInfo.action === "ADD") {
            contentToShow = (<AddEstoqueModal />);
        } else if (this.props.modalInfo.action === "REMOVE") {
            contentToShow = (<RemoveEstoqueModal />);
        }

        return (
            <Modal show={ this.props.modalInfo.showModal }>
                { contentToShow }
            </Modal>
        )
    }
}

function mapStateToProps({ modalInfo }) {
    return { modalInfo };
}

export default connect(mapStateToProps)(ModalGeneral);