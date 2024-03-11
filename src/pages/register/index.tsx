import Banner from "@/components/Banner";
import ContainerLayout from "@/components/Layout/ContainerLayout";
import { Button, Typography } from "@mui/material";
import { ReactElement, useEffect, useLayoutEffect, useState } from "react";
import { useTranslation } from "next-i18next";

import CardSection from "@/components/Card/CardSection";

import { useFormInputData } from "@/hooks/useFormInputData";
import { SubmitHandler, useForm } from "react-hook-form";
import Navbar from "@/components/Navbar/Navbar";

export default function RegisterPage() {
  const schema = useFormInputData();

  const { t } = useTranslation("register");

  const {
    register,
    control,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {
      idNoType: "idNo",
    },
  });

  const onSubmit: SubmitHandler<any> = (data) => console.log(data);

  if (!schema) return;

  return (
    <div>
      <Banner src={schema.data.banner} alt="banner" />

      <Typography variant="h1" textAlign="center">
        {t("title")}
      </Typography>

      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        {schema.data.sections.map((section) => (
          <CardSection
            key={section.name}
            register={register}
            errors={errors}
            section={section}
            control={control}
            getValues={getValues}
            watch={watch}
          />
        ))}

        <Button
          type="submit"
          variant="contained"
          sx={{ margin: "2rem", alignSelf: "end" }}
        >
          {t("buttonSubmit")}
        </Button>
      </form>
    </div>
  );
}

RegisterPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <ContainerLayout>
      <Navbar>{page}</Navbar>
    </ContainerLayout>
  );
};

// export const getServerSideProps = async ({ locale }) => ({
//   props: {
//       ...(await serverSideTranslations(locale, ['common']))
//   }
// });
