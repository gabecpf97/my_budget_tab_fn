import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { User } from "./account/user";
import { SignUp } from "./account/signUp";
import { Login } from "./account/logIn";

export const SwitchRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/log-in" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}