import PropTypes from 'prop-types';
import React from 'react';
import './HeadLine.scss';

const HeadLine = ({ title, description, persons }) => {
  if (!title) return null;
  return (
    <div className="headline" data-test="headline">
      <h1 className="headline__title" data-test="title">
        {title}
      </h1>
      <p className="headline__description" data-test="description">
        {description}
      </p>
    </div>
  );
};

HeadLine.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      fName: PropTypes.string,
      lName: PropTypes.string,
      email: PropTypes.string,
      age: PropTypes.number,
      onlineStatus: PropTypes.bool,
    })
  ),
};

export default HeadLine;
