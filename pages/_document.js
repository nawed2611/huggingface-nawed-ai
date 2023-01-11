import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Nedved AI" key="title" />
        <meta
          property="og:description"
          content="Generate an avatar of yourself using AI."
          key="description"
        />
        {/* <meta
          property="og:image"
          content="https://cdn.buildspace.so/courses/gpt3-writer/project-og.jpg"
        /> */}
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
