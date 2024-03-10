"use client";
import { createTheme } from "@mui/material";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: kanit.style.fontFamily,
    h1: {
      fontSize: 24,
      fontWeight: 500,
    },
  },
});

export default theme;
