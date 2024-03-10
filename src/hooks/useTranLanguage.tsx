import { axiosInstance } from "@/libs/axios";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export const useTranLanguage = () => {
  const [data, setData] = useState<AxiosResponse<any, any>>();

  useEffect(() => {
    const response = axiosInstance
      .get("/i18n.json")
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.error("some thing went wrong: ", err);
      });
  }, []);

  return data?.data;
};
