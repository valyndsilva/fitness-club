import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import Layout from "../components/Layout";

type Props = {
  Component: any;
  pageProps: any;
};
function MyApp({ Component, pageProps }: Props) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
