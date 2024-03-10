import { FormType } from "@/hooks/useFormInputData";
import { Checkbox, FormControl, FormControlLabel, Grid } from "@mui/material";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import ErrorLabel from "./ErrorLabel";

type InputCheckboxProps = {
  item: FormType;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
};

const InputCheckbox = ({ item, register, errors }: InputCheckboxProps) => {
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
              })}
            />
          }
          label={<span dangerouslySetInnerHTML={{ __html: item.label }} />}
        />
        {errors[item.name] && (
          <ErrorLabel errorText={errors[item.name]?.message?.toString()} />
        )}
      </FormControl>
    </Grid>
  );
};

export default InputCheckbox;
