import { CardContent, Grid, Typography } from "@mui/material";
import { CardBox, CardContainer } from "./styles";
import {
  Control,
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import InputText from "../Input/InputText";
import { FormType, RegisterFormResponse } from "@/hooks/useFormInputData";
import InputDropDown from "../Input/InputDropdown";
import InputCheckbox from "../Input/InputCheckbox";
import InputRadio from "../Input/InputRadio";

type CardSectionProps = {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  section: { title: string; inputs: FormType[] };
  control: Control<any, any>;
};

const CardSection = ({
  register,
  errors,
  section,
  control,
}: CardSectionProps) => {
  const renderInputType = (item: FormType) => {
    if (item.type === "text")
      return (
        <InputText
          key={item.name}
          register={register}
          item={item}
          errors={errors}
        />
      );

    if (item.type === "dropdown")
      return (
        <InputDropDown
          control={control}
          key={item.name}
          item={item}
          register={register}
          errors={errors}
        />
      );

    if (item.type === "checkbox")
      return (
        <InputCheckbox
          key={item.name}
          item={item}
          errors={errors}
          register={register}
        />
      );

    if (item.type === "radio")
      return (
        <InputRadio
          key={item.name}
          item={item}
          errors={errors}
          register={register}
        />
      );
  };

  return (
    <CardBox>
      <CardContainer>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary">
            {section?.title}
          </Typography>
          <Grid container spacing={2}>
            {section?.inputs?.map((item) => renderInputType(item))}
          </Grid>
        </CardContent>
      </CardContainer>
    </CardBox>
  );
};

export default CardSection;
