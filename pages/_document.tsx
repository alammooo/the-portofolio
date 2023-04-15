import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Abdullah Alam</title>
        <meta
          name="description"
          content="Tech enthusiast with passion for programming, instinct for crafting visually stunning websites that provide exceptional user experiences."
        />
        <meta
          name="google-site-verification"
          content="Vr28ZS8XZ04quPlFByWRy1AtF-4O3jqfgWR217zhuQQ"
        />
        <meta
          property="og:title"
          content="Abdullah Alam"
        />
        <meta
          property="og:description"
          content="Tech enthusiast with passion for programming, instinct for crafting visually stunning websites that provide exceptional user experiences."
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="./favicon.ico"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
