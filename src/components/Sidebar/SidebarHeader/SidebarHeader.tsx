import Link from "next/link";
import { twMerge } from "tailwind-merge";

import { SidebarHeaderProps as Props } from "./SidebarHeader.types";
import { SidebarHeader as SidebarHeaderUI } from "@/components/ui/sidebar";

const SidebarHeader = (props: Props) => {
  const { className } = props;

  return (
    <SidebarHeaderUI
      className={twMerge("SidebarHeader group-data-[collapsible=icon]:hidden transition-opacity", className)}
    >
      <div className="flex h-16 items-center px-4">
        <Link href="/">
          <span className="text-lg font-semibold">OG-Tools</span>
        </Link>
      </div>
    </SidebarHeaderUI>
  );
};

export default SidebarHeader;
