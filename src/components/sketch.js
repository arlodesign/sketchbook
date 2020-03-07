import React from "react";
import { css } from "@emotion/core";

const SketchWrapper = React.forwardRef(({ width, height }, ref) => {
  return (
    <div
      ref={ref}
      css={css`
        width: 100%;
        overflow: hidden;
        position: relative;
        height: 0;
        padding: 0 0 ${(height / width) * 100}%;

        & > canvas {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          width: 100% !important;
          height: 100% !important;
        }
      `}
    />
  );
});

class Sketch extends React.Component {
  constructor(props) {
    super(props);
    this.sketchRef = React.createRef();
    this.canvas = null;
  }
  state = {
    width: 1,
    height: 1,
  };
  componentDidMount() {
    this.canvas = new p5(this.props.sketch, this.sketchRef.current);
    this.setState({
      width: this.canvas.width,
      height: this.canvas.height,
    });
  }
  componentDidUpdate() {
    this.canvas.remove();
    this.canvas = new p5(this.props.sketch, this.sketchRef.current);
  }
  componentWillUnmount() {
    this.canvas.remove();
  }
  render() {
    return <SketchWrapper ref={this.sketchRef} {...this.state} />;
  }
}

export default Sketch;
