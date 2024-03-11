import React, { useEffect, useState } from "react";
import { ErrorType, ItemType } from "../myInterfaces";

interface props {
  id: string
}

export const Item: React.FC<props> = ({ id }) => {
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
      <p>{itemInfo?.name}</p>
      <p>{itemInfo?.value}</p>
    </div>
  )
}