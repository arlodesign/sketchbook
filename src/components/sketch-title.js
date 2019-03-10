import React from "react";
import sketchTitle from "~util/sketch-title";

export default ({ path }) => (
  <time dateTime={sketchTitle(path)}>{sketchTitle(path)}</time>
);
