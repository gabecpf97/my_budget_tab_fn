import React from "react";
import { List } from "./list";

interface props {
  ids?: string[]
}

export const DisplayList: React.FC<props> = ({ ids }) => {

  return (
    <div>
      <ul>
        {ids?.map((list, idx) => (
          <li key={idx}>
            <List id={list} />
          </li>
        ))}
      </ul>
    </div>
  )
}