import React from "react";
import SEO from "~components/seo";
import Helmet from "react-helmet";
import styled from "@emotion/styled";

import { sketch } from "./sketch/2019/11/30";

const ScreensaverWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

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

class ScreensaverSketch extends React.Component {
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
    return <ScreensaverWrapper ref={this.sketchRef} />;
  }
}

const Screensaver = () => (
  <>
    <SEO title="Screensaver" />
    <Helmet>
      <style type="text/css">{`
        html, body {
          width: 100%;
          max-width: 100%;
          margin: 0;
          overflow: hidden;
        }
      `}</style>
    </Helmet>
    <ScreensaverSketch sketch={sketch()} />
  </>
);

export default Screensaver;
