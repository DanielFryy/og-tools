/* eslint-disable react-refresh/only-export-components */
import { render as rtlRender } from "@testing-library/react";
import { renderHook as rtlRenderHook } from "@testing-library/react";
import { RenderOptions as RTLRenderOptions } from "@testing-library/react";
import { ReactElement, ReactNode } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import Providers from "./providers/Providers/Providers";

export interface RenderOptions extends Omit<RTLRenderOptions, "queries"> {
  // Initial route for the default browser history
  route?: string;
}

export interface WrapperProps {
  children: ReactNode;
}

// Wrapper component of the render function
export const Wrapper = (props: WrapperProps) => {
  const { children } = props;

  return (
    <Providers>
      <BrowserRouter>
        <Routes>
          <Route element={children} />
        </Routes>
      </BrowserRouter>
    </Providers>
  );
};

export const render = (ui: ReactElement, options: RenderOptions = {}) => {
  const { ...returnOptions } = options;

  // Return renderer function with base options set
  return {
    ...rtlRender(ui, { wrapper: Wrapper, ...returnOptions })
  };
};

export const renderHook: typeof rtlRenderHook = (hook, options = {}) => {
  return {
    ...rtlRenderHook(hook, { wrapper: Wrapper, ...options })
  };
};
