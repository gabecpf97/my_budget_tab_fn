import React, { useEffect, useState } from "react";
import { ErrorType, ListType } from "../myInterfaces";
import { Item } from "../item/item";

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
      <p>{listInfo?.name}</p>
      <p>{listInfo?.date.getFullYear()}</p>
      <p>{listInfo?.budget}</p>
      <ul>
        {listInfo?.items.map((item, idx) => (
          <li key={idx}>
            <Item id={item} />
          </li>
        ))}
      </ul>
    </div>
  )
}