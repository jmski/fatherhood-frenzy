// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <title>Fatherhood Frenzy</title>
        <meta name="description" content="Fatherhood Frenzy - slogan here" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className="bg-stone-100 overflow-x-hidden">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
