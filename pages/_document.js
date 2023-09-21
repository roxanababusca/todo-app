import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head/>
      <body className="bg-primary text-zinc-50 selection:bg-accent/75 selection:text-zinc-50 text-md md:text-lg">
      <Main/>
      <NextScript/>
      </body>
    </Html>
  );
}
