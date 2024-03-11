import React, { useEffect, useState } from "react";
import { ErrorType, ListType } from "../myInterfaces";

interface props {
  id: string,
}

export const List: React.FC<props> = ({ id }) => {
  const [listInfo, setListInfo] = useState<ListType>();
  const [errors, setErrors] = useState<ErrorType>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`url`);
        const data = await response.json();
        if(data.err) {
          // error handle
        } else {
          setListInfo(data.list as ListType);
        }
      } catch (error) {
        // error handle
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <p>list name</p>
      <p>date created</p>
      <p>budget</p>
      <ul>
        <li>item</li>
      </ul>
    </div>
  )
}