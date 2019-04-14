import React from "react";
import Link from "~components/link";
import Layout from "~components/layout";
import SEO from "~components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Not Found</h1>
    <p>
      Try the <Link to="/">index</Link>.
    </p>
  </Layout>
);

export default NotFoundPage;
