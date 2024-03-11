import React from "react";
import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import { User } from "./account/user";
import { SignUp } from "./account/signUp";
import { Login } from "./account/logIn";

export const SwitchRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {localStorage.getItem("token") ? (
          <div>
            <Route path="/user" element={<User />} />
            <Navigate to="/user" replace />
          </div>
        ) : (
          <div>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/log-in" element={<Login />} />
            <Navigate to="/log-in" replace />
          </div>
        )}
        <Route path="/" element={<Navigate to="/log-in" />} />
      </Routes>
    </BrowserRouter>
  )
}