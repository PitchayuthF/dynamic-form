import { FormControl } from "@mui/base/FormControl";

import {
  Control,
  Controller,
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";
import { FormType } from "@/hooks/useFormInputData";
import { Grid } from "@mui/material";
import ErrorLabel from "./ErrorLabel";
import Label from "./Label";
import { useTranslation } from "react-i18next";

type InputDropDownProps = {
  item: FormType;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  control: Control<any, any>;
};

export default function InputDropDown({
  item,
  register,
  control,
  errors,
}: InputDropDownProps) {
  const { t } = useTranslation("register");

  return (
    <Grid item sm={item?.colSpan ?? 12} xs={12}>
      <Controller
        control={control}
        name={item.name}
        render={({ field }) => (
          <FormControl>
            <Label
              label={t(`input.${item.name}.label`)}
              required={item.validation?.required?.value}
            />

            <select
              className="round"
              style={{ width: "100%", height: "39px", padding: "0 16px" }}
              value={field.value}
              {...register(item.name, {
                ...item.validation,
                required: {
                  value: item.validation?.required?.value,
                  message: t(`input.${item.name}.validation.required`),
                },
              })}
              defaultValue=""
            >
              <option disabled hidden value=""></option>
              {item?.options?.map((option, index) => {
                const optionsLabel: string[] = t(`input.${item.name}.options`, {
                  returnObjects: true,
                });
                return (
                  <option key={option.value} value={option.value}>
                    {optionsLabel[index]}
                  </option>
                );
              })}
            </select>
            {errors[item.name] && (
              <ErrorLabel errorText={errors[item.name]?.message?.toString()} />
            )}
          </FormControl>
        )}
      />
    </Grid>
  );
}
