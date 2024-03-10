import Banner from "@/components/Banner";
import ContainerLayout from "@/components/Layout/ContainerLayout";
import { Button, Typography } from "@mui/material";
import { ReactElement, useEffect, useLayoutEffect, useState } from "react";
import { useTranslation } from "next-i18next";

import CardSection from "@/components/Card/CardSection";

import { useFormInputData } from "@/hooks/useFormInputData";
import { SubmitHandler, useForm } from "react-hook-form";
import { useBrowserLanguage } from "@/hooks/useBrowserLanguage";

export default function RegisterPage() {
  const schema = useFormInputData();
  const lang = useBrowserLanguage();

  const { t } = useTranslation();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({});

  const onSubmit: SubmitHandler<any> = (data) => console.log(data);

  if (!schema) return;

  return (
    <div>
      <Banner src={schema.data.banner} alt="banner" />

      <Typography variant="h1" textAlign="center">
        {t(`${lang}.title`)}
      </Typography>

      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        {schema.data.sections.map((section) => (
          <CardSection
            key={section.title}
            register={register}
            errors={errors}
            section={section}
            control={control}
          />
        ))}

        <Button
          type="submit"
          variant="outlined"
          sx={{ margin: "2rem", alignSelf: "end" }}
        >
          {t(`${lang}.buttonSubmit`)}
        </Button>
      </form>
    </div>
  );
}

RegisterPage.getLayout = function getLayout(page: ReactElement) {
  return <ContainerLayout>{page}</ContainerLayout>;
};
