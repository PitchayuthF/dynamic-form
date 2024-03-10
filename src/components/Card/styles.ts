import { Box, Card, styled } from "@mui/material";

export const CardBox = styled(Box)(({ theme }) => ({
  margin: "0 2rem",
}));

export const CardContainer = styled(Card)(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  borderTop: `5px solid ${theme.palette.primary.main}`,
  borderBottom: `5px solid rgba(0,0,0,0.14)`,

  padding: "0 2rem",
  margin: "0 auto",
  marginTop: "1rem",
  boxShadow:
    "1px 2px 10px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 4px 0px rgba(0,0,0,0.12)",
  [theme.breakpoints.down("sm")]: {
    padding: "0 1rem",
  },
}));

// export const CardContent
