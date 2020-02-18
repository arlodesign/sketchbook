import React, { useState, useEffect } from "react";
import SEO from "~components/seo";
import Helmet from "react-helmet";
import styled from "@emotion/styled";
import sketches from "../util/screensaver-sketches";

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

const Screensaver = () => {
  const [index, setIndex] = useState(0);

  let interval;

  useEffect(() => {
    interval = setInterval(
      () => {
        setIndex(index + 1 === sketches.length ? 0 : index + 1);
      },
      process.env.DEV ? 5000 : 120000
    );

    return () => {
      clearInterval(interval);
    };
  });

  return (
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

      <ScreensaverSketch sketch={sketches[index]()} />
    </>
  );
};

export default Screensaver;
