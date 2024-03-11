import { FormType } from "@/hooks/useFormInputData";
import { FormControl, Grid } from "@mui/material";
import React from "react";
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import ErrorLabel from "./ErrorLabel";
import Label from "./Label";
import { useTranslation } from "react-i18next";

type InputRadioProps = {
  item: FormType;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
};

const InputRadio = ({ item, register, errors }: InputRadioProps) => {
  const { t, i18n } = useTranslation("register");

  return (
    <Grid item xs={12}>
      <FormControl key={item.name} sx={{ marginTop: "16px", width: "100%" }}>
        <Label label={t(`input.${item.name}.label`)} />

        {item.options?.map((option, index) => {
          const optionsLabel: string[] = t(`input.${item.name}.options`, {
            returnObjects: true,
          });

          return (
            <label key={option.value}>
              <input
                {...register(item.name, {
                  ...item.validation,
                  required: {
                    value: item.validation?.required?.value,
                    message: t(`input.${item.name}.validation.required`),
                  },
                })}
                type="radio"
                value={option.value}
              />
              {optionsLabel[index]}
            </label>
          );
        })}

        {errors[item.name] && (
          <ErrorLabel errorText={errors[item.name]?.message?.toString()} />
        )}
      </FormControl>
    </Grid>
  );
};

export default InputRadio;
