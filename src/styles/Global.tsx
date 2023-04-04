import { createTheme, globalCss, styled } from "@stitches/react";
import { ReactNode } from "react";

interface GlobalStyleProps {
  children: ReactNode;
}

export const Container = styled("div", {
  maxWidth: "$container",
  margin: "0 auto",
  padding: "0 1rem",
});

export const Flex = styled("div", {
  display: "flex",
  gap: "$1",
});

export const colors = {
  color: {
    brand1: {
      color: "$brand1",
    },

    grey1: {
      color: "$grey1",
    },

    grey2: {
      color: "$grey2",
    },

    grey3: {
      color: "$grey3",
    },

    grey4: {
      color: "$grey4",
    },

    grey5: {
      color: "$grey5",
    },
    grey6: {
      color: "$grey6",
    },
  },
};

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    fontFamily: "'Inter', sans-serif",
    boxSizing: "border-box",
  },
  html: {
    scrollBehavior: "smooth",
  },
  a: { textDecoration: "none" },
});

export const GlobalStyle: React.FC<GlobalStyleProps> = ({ children }) => {
  const theme = createTheme({
    colors: {
      brand1: "#4B4E6D", // Azul-marinho suave
      brand2: "#9C9EB9", // Cinza-azulado claro
      brand3: "#D0D1D8", // Cinza claro
      brand4: "#ECECF6", // Cinza muito claro
      grey1: "#212529", // Cinza escuro (texto principal)
      grey2: "#495057", // Cinza médio (texto secundário)
      grey3: "#CED3D7", // Cinza claro (bordas e separadores)
      grey4: "#F1F3F5", // Cinza bem claro (fundo de seções)
      grey5: "#F8F9FA", // Cinza quase branco (fundo alternativo)
      grey6: "#DEE0FB", // Cinza azulado (links e destaques)
      whiteFixed: "#ffffff", // Branco fixo
      mode: "#ffffff", // Modo de cor (branco, neste caso)
    },
    sizes: {
      container: "75rem",
    },
    space: {
      1: "0.5rem",
      2: "1rem",
      3: "2rem",
    },
    fonts: {
      titles: '"Lexend", sans-serif;',
      texts: '"Inter", sans-serif',
    },
    fontSizes: {
      title1: "2.75rem",
      title2: "1.75rem",
      title3: "1.50rem",
      title4: "1.25rem",
      text1: "1rem",
      text2: "0.875rem",

      // Mobile
      title1Mobile: "$title2",
      title2Mobile: "$title3",
    },
    lineHeights: {
      title1: "3.8rem",
      title2: "2.75rem",
      title3: "2.5rem",
      title4: "1.25rem",
      text1: "1.75rem",
      text2: "1.75rem",

      // Mobile
      title1Mobile: "$title2",
      title2Mobile: "$title3",
    },

    radii: {
      1: "0.5rem",
      2: "0.25rem",
    },
  });

  globalStyles();

  const App = styled("div", {
    minHeight: "100vh",
  });

  return <App className={theme}>{children}</App>;
};
