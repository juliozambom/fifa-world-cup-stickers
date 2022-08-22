import { ChakraProvider } from "@chakra-ui/react";
import GlobalStyles from "../../assets/styles/global";
import { AdminProvider } from "../../contexts/AdminContext";
import Routes from "../../routes";

function App() {
  return (
    <ChakraProvider resetCSS={false}>
      <AdminProvider>
        <GlobalStyles />
        <Routes />
      </AdminProvider>
    </ChakraProvider>
  );
}

export default App;
