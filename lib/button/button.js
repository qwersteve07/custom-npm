import classNames from 'classnames/bind';
import React from 'react';
import styles from './index.module.scss';
import LoadingIcon from './loading-icon';
const cx = classNames.bind(styles);

const Button = ({
  loading = false,
  onClick,
  theme = 'default',
  children,
  dataCy
}) => {
  const btnClass = cx({
    button: true,
    loading: loading,
    [theme]: true
  });
  return React.createElement("button", {
    "data-cy": dataCy,
    className: btnClass,
    onClick: () => {
      if (onClick) {
        onClick();
      }
    },
    disabled: loading
  }, loading ? React.createElement(LoadingIcon, null) : children);
};

export default Button;