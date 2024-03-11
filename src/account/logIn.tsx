import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { ErrorType } from "../myInterfaces";
import { FormElement } from "../general/formElement";

export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<ErrorType>();
  const navigator: NavigateFunction = useNavigate(); 

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const userInfo = {email, password};
      const response: Response = await fetch(`url`, {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      if (data.err) {
        // error handle
      } else {
        localStorage.setItem("token", data.token as string);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigator('/');
      }
    } catch (error) {
      // error handle
    }
  }

  return (
    <div>
      <p>Log in</p>
      <form onSubmit={(e: SyntheticEvent) => handleSubmit(e)}>
        <FormElement name="email" isRequired={true} 
          type="text" onChangeFn={onEmailChange} />
        <FormElement name="password" isRequired={true} 
          type="password" onChangeFn={onPasswordChange} />
        <button type="submit">Log In</button>
      </form>
    </div>
  )
}