import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { FormElement } from "../general/formElement";
import { Login } from "./logIn";

export const SignUp: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const navigator: NavigateFunction = useNavigate();

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const onEmailChagne = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const onConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  }

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const userInfo = {
        name,
        email,
        password,
        confirmPassword
      }
      const response: Response = await fetch(`url`, {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      if (data.err) {
        // handle error
      } else {
        localStorage.setItem("token", data.token as string);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigator('/');
      }
    } catch (error) {
      // hanle error
    }
  }

  return (
    <div>
      <form onSubmit={(e: SyntheticEvent) => handleSubmit(e)}>
        <FormElement name="name" isRequired={true} 
          onChangeFn={onNameChange} type="text"/>
        <FormElement name="email" isRequired={true} 
          onChangeFn={onEmailChagne} type="text"/>
        <FormElement name="password" isRequired={true} 
          onChangeFn={onPasswordChange} type="password"/>
        <FormElement name="confirm password" isRequired={true} 
          onChangeFn={onConfirmPasswordChange} type="password"/>
        <button type="submit">Sign up</button>
      </form>
      <p>Already signed up?</p>
      <Link to="/log-in">Log In</Link>
    </div>
  )
}