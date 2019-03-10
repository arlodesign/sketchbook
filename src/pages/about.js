import React from "react";
import SEO from "~components/seo";
import Layout from "~components/layout";
import Link from "~components/link";
import NavButton from "~components/nav-button";

export default ({ location }) => (
  <>
    <SEO title="About" />
    <h1>About</h1>
    <p>
      This site presents semi-daily explorations of generative and procedural
      art. The code is all available on{" "}
      <Link href="https://github.com/arlodesign/sketchbook/">GitHub</Link>.
    </p>
    <p>
      <Link href="https://arlo.me/">Arlo Bryan Guthrie</Link> often uses this
      work to produce screenprints and other printed artwork. He might even
      start selling it some day. He’s on{" "}
      <Link href="https://www.instagram.com/arlodesign/">Instagram</Link>.
    </p>
    <Link to="/">Back to index</Link>
  </>
);
