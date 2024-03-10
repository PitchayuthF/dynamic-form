import { Container as ContainerMui, styled } from "@mui/material";

export const Container = styled(ContainerMui)(({ theme }) => ({
  padding: 0,
  [theme.breakpoints.up("sm")]: {
    padding: 0,
  },
}));

// export const CardContent
