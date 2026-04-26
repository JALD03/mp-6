"use client";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: { default: "#030712", paper: "#111827" },
    primary: { main: "#3b82f6" },
    text: { primary: "#ffffff", secondary: "#9ca3af" },
  },
  typography: { fontFamily: '"DM Sans", sans-serif' },
  shape: { borderRadius: 12 },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en">
      <body>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
      </body>
      </html>
  );
}