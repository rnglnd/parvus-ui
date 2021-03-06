/* @flow */
import React, { type Node } from 'react';
import cxs from 'cxs';

type Props = {
  children: string | Node,
  className?: string,
  styles?: Object,
  otherProps?: Object
};

const A = (props: Props) => {
  const { className, children, styles, ...otherProps } = props;

  const _styles = cxs({
    backgroundColor: 'transparent',
    color: '#0275d8',
    cursor: 'pointer',
    fontSize: '1.25rem',
    fontWeight: 400,
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline'
    },
    ':disabled': {
      opacity: 0.3
    },
    ...styles
  });

  return (
    <a className={`${_styles} ${className || ''}`} {...otherProps}>
      {children}
    </a>
  );
};

export default A;
