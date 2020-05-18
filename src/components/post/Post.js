import PropTypes from 'prop-types';
import React from 'react';
import './Post.scss';

const Post = ({ title, description }) => {
  if (!title) return null;
  return (
    <div className="post" data-test="post">
      <h2 className="post__title" data-test="title">
        {title}
      </h2>
      <p className="post__body" data-test="description">
        {description}
      </p>
    </div>
  );
};

Post.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Post;
