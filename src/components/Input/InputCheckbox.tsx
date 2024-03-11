import { FormType } from "@/hooks/useFormInputData";
import { Checkbox, FormControl, FormControlLabel, Grid } from "@mui/material";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import ErrorLabel from "./ErrorLabel";
import { useTranslation } from "react-i18next";

type InputCheckboxProps = {
  item: FormType;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
};

const InputCheckbox = ({ item, register, errors }: InputCheckboxProps) => {
  const { t } = useTranslation("register");

  return (
    <Grid item xs={12}>
      <FormControl key={item.name} sx={{ marginTop: "16px", width: "100%" }}>
        <FormControlLabel
          sx={{ whiteSpace: "pre-line" }}
          control={
            <Checkbox
              size="small"
              {...register(item.name, {
                ...item.validation,
                required: {
                  value: item.validation?.required?.value,
                  message: t(`input.${item.name}.validation.required`),
                },
              })}
            />
          }
          label={
            <span
              dangerouslySetInnerHTML={{
                __html: t(`input.${item.name}.label`),
              }}
            />
          }
        />
        {errors[item.name] && (
          <ErrorLabel errorText={errors[item.name]?.message?.toString()} />
        )}
      </FormControl>
    </Grid>
  );
};

export default InputCheckbox;
