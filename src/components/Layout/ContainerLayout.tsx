import { Box } from "@mui/material";
import { Container } from "./styles";

export default function ContainerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Container maxWidth="xl">{children}</Container>;
}
