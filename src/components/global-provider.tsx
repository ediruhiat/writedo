import { ThemeProvider } from "./theme-provider";

interface GlobalProviderProps {
  children: React.ReactNode;
}
const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};

export default GlobalProvider;
