import React, { useRef, useEffect } from "react";
import p5 from "p5";
import styled from "@emotion/styled";

const SketchWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  height: 0;
  padding: 0 0 127.27272727%;

  & > canvas {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
  }
`;

class Sketch extends React.Component {
  constructor(props) {
    super(props);
    this.sketchRef = React.createRef();
    this.canvas = null;
  }
  componentDidMount() {
    this.canvas = new p5(this.props.sketch, this.sketchRef.current);
  }
  componentDidUpdate() {
    this.canvas.remove();
    this.canvas = new p5(this.props.sketch, this.sketchRef.current);
  }
  componentWillUnmount() {
    this.canvas.remove();
  }
  render() {
    return <SketchWrapper ref={this.sketchRef} />;
  }
}

export default Sketch;
