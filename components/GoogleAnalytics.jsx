import Script from "next/script";
import React from "react";

const GoogleAnalytics = () => {
  return (
    <div>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-MG5JRSF0RR"
        strategy="lazyOnload"
      />
      <Script id="gtag-init" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MG5JRSF0RR', {
                page_path: window.location.pathname,
            });
        `}
      </Script>
    </div>
  );
};

export default GoogleAnalytics;
