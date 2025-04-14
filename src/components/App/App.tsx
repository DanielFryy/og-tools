import { BrowserRouter, Navigate, Route, Routes } from "react-router";

import { AppProps as Props } from "./App.types";
import { navItems } from "../Sidebar/Sidebar.helpers";
import AppLayout from "@/components/AppLayout/AppLayout";
import NotFoundPage from "@/components/pages/NotFoundPage/NotFoundPage";
import Providers from "@/providers/Providers/Providers";

const App = (props: Props) => {
  return (
    <Providers>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="/ships" />} />
            {navItems.map(item => {
              const { route, page: Page } = item;
              return <Route path={route} element={<Page />} />;
            })}
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate replace to="/404" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Providers>
  );
};

export default App;
