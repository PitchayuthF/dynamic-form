import { axiosInstance } from "@/libs/axios";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export type RegisterFormResponse = {
  data: {
    banner: string;
    sections: {
      title: string;
      inputs: FormType[];
    }[];
  };
};

export type FormType = {
  name: string;
  label: string;
  type: string;
  validation: {
    required: { value: boolean; message: string };
    minLength: { value: number; message: string };
    maxLength: { value: number; message: string };
    pattern: { value: RegExp; message: string };
  };
  colSpan?: number;
  options?: { value: string; label: string }[];
};

export const useFormInputData = () => {
  const [data, setData] = useState<AxiosResponse<RegisterFormResponse, any>>();

  useEffect(() => {
    const response = axiosInstance
      .get("/data.json")
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.error("some thing went wrong: ", err);
      });
  }, []);

  return data?.data;
};
