import Script from "next/script";

import { AdSenseProps as Props } from "./AdSense.types";

const AdSense = (props: Props) => {
  const { publisherId } = props;

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId}`}
      strategy="afterInteractive"
      crossOrigin="anonymous"
    />
  );
};

export default AdSense;
