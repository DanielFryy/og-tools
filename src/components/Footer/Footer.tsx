import { twMerge } from "tailwind-merge";

import { FooterProps as Props } from "./Footer.types";

const Footer = (props: Props) => {
  const { className } = props;

  return (
    <footer className={twMerge("Footer border-t bg-sidebar py-4", className)}>
      <div className="flex items-center justify-center text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} OG-Tools. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
