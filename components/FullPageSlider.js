import React from "react";
import ReactPlayer from 'react-player';
import {Col } from "react-bootstrap";

const FullPageSlider = () => {
  return(
    <>
     <Col md={11} className="video-slider">
      <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
    </Col>
    </>
  )
};

export default FullPageSlider;
