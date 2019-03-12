import React from "react";
import p5 from "p5";
import styles from "./sketch.module.css";

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
    return <div className={styles.sketch} ref={this.sketchRef} />;
  }
}

export default Sketch;
