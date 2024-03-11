import React, { ChangeEvent } from "react";

interface props {
  name: string,
  onChangeFn: (e: ChangeEvent<HTMLInputElement>) => void,
  type: string,
  isRequired: boolean,
  defaultValue?: any
}

export const FormElement: React.FC<props> = 
  ({name, onChangeFn, type, isRequired, defaultValue}) => {
    return (
      <div>
        <label>{name}</label>
        <input
          name={name}
          required={isRequired}
          type={type}
          value={defaultValue}
          onChange={onChangeFn}
        />
      </div>
    )
}