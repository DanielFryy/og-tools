import { AdSenseProps as Props } from "./AdSense.types";

const AdSense = (props: Props) => {
  const { publisherId } = props;

  return (
    <script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId}`}
      crossOrigin="anonymous"
    />
  );
};

export default AdSense;
