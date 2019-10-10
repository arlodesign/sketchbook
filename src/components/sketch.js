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

const Sketch = ({ sketch }) => {
  const sketchRef = useRef(null);
  let canvas;

  useEffect(() => {
    canvas = new p5(sketch, sketchRef.current);
  }, []);

  return <SketchWrapper ref={sketchRef} />;
};

export default Sketch;
