import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { User } from "./account/user";

export const SwitchRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <User />
      </Routes>
    </BrowserRouter>
  )
}