import React, { useEffect, useState } from "react";
import { ErrorType, UserType } from "../myInterfaces";

export const User: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserType>();
  const [errors, setErrors] = useState<ErrorType>();

  useEffect(() => {
    const fetchData: Function = async () => {
      try {
        const response = await fetch(`url`, {
          headers: {
            "Authorizzation": `Bearer ${localStorage.getItem("token")}`
          }
        });
        const data = await response.json();
        if (data.err as ErrorType) {
          setErrors(data.err);
        } else {
          setUserInfo(data.user as UserType);
        }
      } catch (error) {
        // error handle
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <p>Username here</p>
      <p>email address</p>
      <div>
        {/* show all list */}
      </div>
    </div>
  )
}