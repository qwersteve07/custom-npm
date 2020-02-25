var React = require('react');

var styles = require('./loading.module.scss');

const LoadingIcon = () => {
  return React.createElement("div", {
    className: styles["lds-ellipsis"]
  }, React.createElement("div", null), React.createElement("div", null), React.createElement("div", null), React.createElement("div", null));
};

module.exports = LoadingIcon;