import { FormType } from "@/hooks/useFormInputData";
import {
  FormControl,
  Grid,
} from "@mui/material";
import React from "react";
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import ErrorLabel from "./ErrorLabel";
import Label from "./Label";

type InputRadioProps = {
  item: FormType;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
};

const InputRadio = ({ item, register, errors }: InputRadioProps) => {
  return (
    <Grid item xs={12}>
      <FormControl key={item.name} sx={{ marginTop: "16px", width: "100%" }}>
        <Label label={item.label} />

        {item.options?.map((option) => (
          <label htmlFor="field-rain" key={option.value}>
            <input
              {...register(item.name, {
                ...item.validation,
              })}
              style={{}}
              type="radio"
              value={option.value}
              id="field-rain"
            />
            {option.label}
          </label>
        ))}

        {errors[item.name] && (
          <ErrorLabel errorText={errors[item.name]?.message?.toString()} />
        )}
      </FormControl>
    </Grid>
  );
};

export default InputRadio;
