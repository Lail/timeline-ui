import React from 'react';

const Icon = ({ name, size, className }) =>  (
  <i className={`material-icons md-${size} ${name}`}>{name}</i>
);

Icon.defaultProps = {
  size: 24,
}

export default Icon;
