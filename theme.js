import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "var(--font-raleway)",
    body: "var(--font-raleway)",
  },
  colors: {
    sky: {
      white: "#FAFAFD",
      lightgrey: "#EDEDED",
      orange: "#FF9E00",
      red: "#FF0000",
      purple: "#B5007D",
      pink: "#FF00A0",
      blue: "#000FF5",
      azure: "#0097F5",
      lineartext:
        "linear-gradient(90deg, #FF7800 0%, #F80032 20%, #FF00A0 40%, #8C28FF 60%, #0023FF 80%, #1798FF 100%)",
    },
  },
});
