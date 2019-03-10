import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import SR from "~components/sr";
import sketchTitle from "~util/sketch-title";
import styles from "./index-grid.module.css";

class IndexGridItem extends React.Component {
  constructor(props) {
    super(props);
    this.name = sketchTitle(props.sketch.node.path);
    this.id = `sketch-${this.name}`;
    this.figureClassName = styles.figure;
    this.state = {
      targeted: false,
    };
  }

  componentDidMount() {
    if (window.location.hash && window.location.hash.substr(1) === this.id) {
      this.figureClassName = [styles.figure, styles.target].join(" ");
      this.setState({ targeted: true });
    }
  }

  render() {
    const { sketch, image } = this.props;
    const { path } = sketch.node;
    const { name, id } = this;

    return (
      <li className={styles.item} key={path}>
        <Link className={styles.link} to={path}>
          <figure className={this.figureClassName} id={id}>
            <Img fluid={image.node.childImageSharp.fluid} alt={name} />
            <figcaption>
              <SR>
                <time dateTime={name}>{name}</time>
              </SR>
            </figcaption>
          </figure>
        </Link>
      </li>
    );
  }
}

export default ({ sketches, images }) => (
  <nav aria-labelledby="sketches">
    <ul className={styles.grid}>
      {sketches.map(sketch => (
        <IndexGridItem
          key={sketch.node.path}
          sketch={sketch}
          image={images.find(image =>
            image.node.relativePath.includes(
              sketch.node.path.replace("/sketch/", "").replace(/\/$/, "")
            )
          )}
        />
      ))}
    </ul>
  </nav>
);
