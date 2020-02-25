var React = require('react');
var styles = require('./loading.module.scss');

const LoadingIcon = () => {

  return(
    <div className={styles["lds-ellipsis"]}>
      <div/>
      <div/>
      <div/>
      <div/>
    </div>
  )
};

module.exports = LoadingIcon
