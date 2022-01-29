import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
            <link rel="preload" href="/fonts/Braga.otf" as="font" crossOrigin="anonymous" ></link>
            <link rel="preload" href="/fonts/Josefin_Sans/JosefinSans-Light.ttf" as="font" crossOrigin="anonymous" ></link>
            <link rel="preload" href="/fonts/Josefin_Sans/JosefinSans-Regular.ttf" as="font" crossOrigin="anonymous" ></link>
            <link rel="preload" href="/fonts/Josefin_Sans/JosefinSans-Medium.ttf" as="font" crossOrigin="anonymous" ></link>
            <link rel="preload" href="/fonts/Josefin_Sans/JosefinSans-SemiBold.ttf" as="font" crossOrigin="anonymous" ></link>
            <link rel="preload" href="/fonts/Josefin_Sans/JosefinSans-Italic.ttf" as="font" crossOrigin="anonymous" ></link>
            <link rel="preload" href="/fonts/Josefin_Sans/JosefinSans-Bold.ttf" as="font" crossOrigin="anonymous" ></link>
            <link rel="preload" href="/fonts/Josefin_Slab/JosefinSlab-Light.ttf" as="font" crossOrigin="anonymous" ></link>
            <link rel="preload" href="/fonts/Josefin_Slab/JosefinSlab-Regular.ttf" as="font" crossOrigin="anonymous" ></link>
            <link rel="preload" href="/fonts/Josefin_Slab/JosefinSlab-Medium.ttf" as="font" crossOrigin="anonymous" ></link>
            <link rel="preload" href="/fonts/Josefin_Slab/JosefinSlab-SemiBold.ttf" as="font" crossOrigin="anonymous" ></link>
            <link rel="preload" href="/fonts/Josefin_Slab/JosefinSlab-Italic.ttf" as="font" crossOrigin="anonymous" ></link>
            <link rel="preload" href="/fonts/Josefin_Slab/JosefinSlab-Bold.ttf" as="font" crossOrigin="anonymous" ></link>
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