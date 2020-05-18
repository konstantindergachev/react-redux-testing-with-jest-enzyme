import PropTypes from 'prop-types';
import React from 'react';
import './Button.scss';

const Button = ({ emitEvent, text, toggleButton }) => {
  return (
    <button
      type="button"
      onClick={() => {
        emitEvent();
        toggleButton();
      }}
      className="btn"
      data-test="btn"
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  emitEvent: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  toggleButton: PropTypes.func.isRequired,
};

export default Button;
