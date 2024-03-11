import { FormControl } from "@mui/base/FormControl";

import {
  Control,
  Controller,
  FieldErrors,
  UseFormGetValues,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import { FormType } from "@/hooks/useFormInputData";
import { Grid } from "@mui/material";
import ErrorLabel from "./ErrorLabel";
import Label from "./Label";
import { useTranslation } from "react-i18next";
import InputText from "./InputText";
import { useEffect } from "react";

type InputDropDownProps = {
  item: {
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
    idNoOptions?: { idNo: FormType; passport: FormType };
  };
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  control: Control<any, any>;
  getValues: UseFormGetValues<any>;
  watch: UseFormWatch<any>;
};

export default function InputDropDown({
  item,
  register,
  control,
  errors,
  getValues,
  watch,
}: InputDropDownProps) {
  const { t } = useTranslation("register");
  useEffect(() => {}, [watch("idNoType")]);

  if (item.name === "idNoType" && item.idNoOptions) {
    return (
      <>
        <Grid item sm={6} xs={12}>
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
                      value: item.validation?.required?.value ?? false,
                      message: t(`input.${item.name}.validation.required`),
                    },
                  })}
                >
                  <option disabled hidden value=""></option>
                  {item?.options?.map((option, index) => {
                    const optionsLabel: string[] = t(
                      `input.${item.name}.options`,
                      {
                        returnObjects: true,
                      }
                    );
                    return (
                      <option key={option.value} value={option.value}>
                        {optionsLabel[index]}
                      </option>
                    );
                  })}
                </select>
                {errors[item.name] && (
                  <ErrorLabel
                    errorText={errors[item.name]?.message?.toString()}
                  />
                )}
              </FormControl>
            )}
          />
        </Grid>
        {getValues("idNoType") === "idNo" ? (
          <InputText
            item={item.idNoOptions.idNo}
            register={register}
            errors={errors}
          />
        ) : (
          <InputText
            item={item.idNoOptions.passport}
            register={register}
            errors={errors}
          />
        )}
      </>
    );
  }

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
                  value: item.validation?.required?.value ?? false,
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
