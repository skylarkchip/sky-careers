// import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

// Fonts
import { fonts } from "@/lib/fonts";

// Theme
import { theme } from "@/theme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-raleway: ${fonts.raleway.style.fontFamily};
          }
        `}
      </style>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
