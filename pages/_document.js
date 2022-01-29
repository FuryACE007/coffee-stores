import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
            <link rel="preload" href="/fonts/Braga.otf" as="font" crossOrigin="anonymous" ></link>
            <link rel="preload" href="/fonts/Josefin_Sans/JosefinSans-Light.ttf" as="font" crossOrigin="anonymous" ></link>
            <link rel="preload" href="/fonts/Josefin_Sans/JosefinSans-Regular.ttf" as="font" crossOrigin="anonymous" ></link>
            <link rel="preload" href="/fonts/Josefin_Slab/JosefinSlab-Light.ttf" as="font" crossOrigin="anonymous" ></link>
            <link rel="preload" href="/fonts/Josefin_Slab/JosefinSlab-Regular.ttf" as="font" crossOrigin="anonymous" ></link>
        </Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
        </body>
      </Html>
    );
  }
}

export default MyDocument;