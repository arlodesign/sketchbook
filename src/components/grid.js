import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { css } from "@emotion/core";
import SR from "~components/sr";
import sketchTitle from "~util/sketch-title";

class GridItem extends React.Component {
  constructor(props) {
    super(props);
    this.name = sketchTitle(props.sketch.node.path);
    this.id = `sketch-${this.name}`;
    this.state = {
      targeted: false,
    };
  }

  componentDidMount() {
    if (window.location.hash && window.location.hash.substr(1) === this.id) {
      this.setState({ targeted: true });
    }
  }

  render() {
    const { sketch, image } = this.props;
    const { path } = sketch.node;
    const { name, id } = this;

    return (
      <li
        key={path}
        css={css`
          display: block;
          list-style: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E");
        `}
      >
        <Link to={path}>
          <figure
            id={id}
            css={
              this.state.targeted
                ? css`
                    padding: var(--spacing) calc(var(--spacing) / 2) 0;
                    animation: pulse 1s 0.25s ease;
                  `
                : css`
                    padding: var(--spacing) calc(var(--spacing) / 2) 0;
                  `
            }
          >
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
  <nav>
    <ul
      css={css`
        --grid-columns: 3;
        display: grid;
        grid-template-columns: repeat(var(--grid-columns), 1fr);
        grid-template-rows: repeat(12 / var(--grid-columns), 1fr);
        margin: 0;
        padding: 0 calc(var(--spacing) / 2);
        list-style: none;
        @media only screen and (min-width: 30em) {
          --grid-columns: 4;
        }
      `}
    >
      {sketches.map(sketch => (
        <GridItem
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
