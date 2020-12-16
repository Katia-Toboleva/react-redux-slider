import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import Image from '../image';
import Button from '../button';
import styles from './slider.scss';
import { actions } from './state';
import { generatedImages } from './slider.mock';

const Slider = (props) => {
  const handleBackButtonClick = () => {
    props.actions.decrement();
  };

  const handleNextButtonClick = () => {
    props.actions.increment();
  };

  const { state } = props;

  return (
    <div className={styles.slider}>
      <Image src={generatedImages[state.imageId].url} />
      <Button text="back" type="back" onClick={handleBackButtonClick} />
      <Button text="next" type="next" onClick={handleNextButtonClick} />
    </div>
  );
};

const mapStateToProps = (store) => ({
  state: {
    ...store.slider,
  },
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
