import { createContext, useState } from "react";
import { useToast } from "@chakra-ui/react";

const AdminContext = createContext();

export function AdminProvider({ children }) {
  const [isAdminAuthorized, setIsAdminAuthorized] = useState(false);
  const [sendedAuthorizeAdmin, setSendedAuthorizeAdmin] = useState(false);

  const toast = useToast();

  function authorizeAdmin(password) {
    setSendedAuthorizeAdmin(true);
    if (password === "admin") {
      setTimeout(() => {
        toast({
          title: "Acesso autorizado",
          position: "top",
          status: "success",
          variant: "subtle",
          duration: 2000,
        });
      }, 1000);
      setTimeout(() => {
        setSendedAuthorizeAdmin(false);
        setIsAdminAuthorized(true);
      }, 2000);
    } else {
      setTimeout(() => {
        toast({
          title: "Acesso negado",
          position: "top",
          status: "error",
          variant: "subtle",
          duration: 2000,
        });
        setSendedAuthorizeAdmin(false);
      }, 2000);
    }
  }
  return (
    <AdminContext.Provider
      value={{ isAdminAuthorized, authorizeAdmin, sendedAuthorizeAdmin }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export default AdminContext;
