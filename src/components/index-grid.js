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
            {image && (
              <Img fluid={image.node.childImageSharp.fluid} alt={name} />
            )}
            {/* This should only appear in development */}
            {!image && (
              <img
                src="data:image/svg+xml,%3csvg height='840' viewBox='0 0 660 840' width='660' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd' stroke='white' stroke-width='4'%3e%3cpath d='m2 2h656v836h-656z'/%3e%3cpath d='m0 0 660 840'/%3e%3cpath d='m660 0-660 840'/%3e%3c/g%3e%3c/svg%3e"
                style={{ width: "100%" }}
              />
            )}
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
