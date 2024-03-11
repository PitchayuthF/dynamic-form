import * as React from "react";
import { FormControl } from "@mui/base/FormControl";
import { Input, inputClasses } from "@mui/base/Input";
import { styled } from "@mui/system";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { blue, grey } from "@mui/material/colors";
import { FormType } from "@/hooks/useFormInputData";
import { useTranslation } from "react-i18next";
import { Grid } from "@mui/material";
import ErrorLabel from "./ErrorLabel";
import Label from "./Label";

type InputTextProps = {
  item: FormType;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
};

export default function InputText({ item, register, errors }: InputTextProps) {
  const { t } = useTranslation("register");

  return (
    <Grid item sm={item?.colSpan ?? 12} xs={12}>
      <FormControl key={item.name}>
        <Label
          label={t(`input.${item.name}.label`)}
          required={item.validation?.required?.value}
        />

        <StyledInput
          {...register(item.name, {
            ...item.validation,
            pattern: {
              value: new RegExp(item.validation?.pattern?.value),
              message: t(`input.${item.name}.validation.pattern`),
            },
            required: {
              value: item.validation?.required?.value,
              message: t(`input.${item.name}.validation.required`),
            },
            minLength: {
              value: item.validation?.minLength?.value,
              message: t(`input.${item.name}.validation.minLength`),
            },
            maxLength: {
              value: item.validation?.maxLength?.value,
              message: t(`input.${item.name}.validation.maxLength`),
            },
          })}
        />
        {errors[item.name] && (
          <ErrorLabel errorText={errors[item.name]?.message?.toString()} />
        )}
      </FormControl>
    </Grid>
  );
}

const StyledInput = styled(Input)(
  ({ theme }) => `

  .${inputClasses.input} {
    width: 100%;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 4px;
    color: ${grey[900]};
    border: 1px solid ${grey[400]};
    box-shadow: 0px 2px 2px ${grey[50]};

    &:hover {
        border-color: ${blue[400]};
    }

    &:focus {
        outline: 0;
        border-color: ${blue[400]};
    }

    &[aria-invalid='true'] {
      border: 1px solid red ;
    }
  }
`
);
