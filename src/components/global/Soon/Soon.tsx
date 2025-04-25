"use client";
import React from "react";
import { twMerge } from "tailwind-merge";

import { SoonProps as Props } from "./Soon.types";

const Soon = (props: Props) => {
  const { className } = props;

  return (
    <div className={twMerge("Soon flex h-[20px] items-center rounded-full bg-neutral-500/20 px-2", className)}>
      <span className="text-[10px] font-bold leading-none text-transparent bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400 bg-clip-text animate-gradient-x">
        SOON
      </span>
    </div>
  );
};

export default Soon;
