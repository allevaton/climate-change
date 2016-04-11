import {connect} from 'react-redux';
import React, {Component, PropTypes} from 'react';

import Modal from 'react-bootstrap-modal';

import {hideHelp} from '../actions/help';

class HelpModal extends Component {
  render() {
    let {modalOpen, onHide, description, modalType} = this.props;
    return (
      <Modal
        show={modalOpen}
        onHide={onHide}
        aria-labelledby="ModalHeader">

        <Modal.Header closeButton>
          <Modal.Title id='ModalHeader'>Help on {modalType}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>{description || 'Loading...'}</div>
        </Modal.Body>
      </Modal>
    )
  }
}

function mapStateToProps(state) {
  return {
    modalOpen: state.help.modal.open,
    modalType: state.help.modal.type,
    description: state.help.data[state.help.modal.type]
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onHide() {
      dispatch(hideHelp());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HelpModal)
