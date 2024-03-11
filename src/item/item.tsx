import React, { useEffect, useState } from "react";
import { ErrorType, ItemType } from "../myInterfaces";

export const Item: React.FC = () => {
  const [itemInfo, setitemInfo] = useState<ItemType>();
  const [errors, setErrors] = useState<ErrorType>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`url`);
        const data = await response.json();
        if(data.err) {
          // error handle
        } else {
          setitemInfo(data.list as ItemType);
        }
      } catch (error) {
        // error handle
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <p>item name</p>
      <p>value</p>
    </div>
  )
}