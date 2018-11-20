import React from 'react';
import { connect } from 'react-redux';
import { showMessage } from '../../store/actions/authActions';
import './AlertModal.scss';

const AlertModal = ({ message, showMessage }) => {
  return (
    <div className="alert-modal__wrapper">
      <div className="alert-modal__window">
        <p className="alert-modal__message">{message}</p>
        <button className="modal-button--large" onClick={() => showMessage('')} id="back" autoFocus>
          OK
        </button>
      </div>
    </div>
  );
};

export default connect(
  null,
  { showMessage }
)(AlertModal);
