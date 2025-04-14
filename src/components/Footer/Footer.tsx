import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import { twMerge } from "tailwind-merge";

import { FooterProps as Props } from "./Footer.types";

const Footer = (props: Props) => {
  const { className } = props;

  return (
    <footer className={twMerge("Footer border-t bg-sidebar p-4", className)}>
      <div className="flex items-center justify-between text-center text-sm text-muted-foreground gap-4">
        <p>© {new Date().getFullYear()} OG-Tools. All rights reserved.</p>
        <div className="flex gap-3">
          <a
            href="https://github.com/DanielFryy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-foreground transition-colors"
          >
            <SiGithub size={18} />
          </a>
          <a
            href="https://x.com/danielfryy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="hover:text-foreground transition-colors"
          >
            <SiX size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
