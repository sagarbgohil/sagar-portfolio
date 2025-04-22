import React from "react";
import Canonical from "./Canonical";

const HeadElements = () => {
  return (
    <head>
      <meta
        name="google-site-verification"
        content="JAPyqdKsPqHnf16HHZVLzD0hHuoQvyDdZDFnnMyZRI0"
      />
      <link
        rel="preload"
        as="image"
        href="/assets/photo-trans.png"
        imageSrcSet="/assets/photo-trans.png"
      />
      <Canonical />
    </head>
  );
};

export default HeadElements;
