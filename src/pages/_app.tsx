import NavBar from "@/components/NavBar";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Head } from "next/document";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      {/* <Head>
      <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5187386644736472"
        //   crossOrigin="anonymous" 
        ></script>
      </Head> */}
      <NavBar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
