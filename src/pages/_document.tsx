import { Html, Head, Main, NextScript, DocumentProps } from "next/document";
// import i18nextConfig from "../../next-i18next.config";

type Props = DocumentProps;

export default function Document(props: Props) {
  const currentLocale =
    props.__NEXT_DATA__.locale ?? "th";

  return (
    <Html lang={currentLocale}>
    {/* <Html> */}
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
