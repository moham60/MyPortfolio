"use client";
import { ThemeProvider as NextThemeProvider } from "next-themes"
export default function ThemeProvider({children,...props}) {
  return (
    <NextThemeProvider
        attribute="class"
      defaultTheme="system"
      enableSystem={true}
    disableTransitionOnChange
      {...props}>
        {children}
    </NextThemeProvider>
  )
}

