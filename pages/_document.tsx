import { Html, Head, Main, NextScript } from "next/document";
// import loader from "../components/Loader";
export default function Document() {
  return (
    <Html>
      <Head>
        <head>{/* <style>{loader}</style> */}</head>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        {/* <div id={"globalLoader"}>
          <div class="wrapper">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="shadow"></div>
            <div class="shadow"></div>
            <div class="shadow"></div>
          </div>
        </div> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
