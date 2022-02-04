import { createContext, useState } from "react";

//Creacion del contexto
const AuthContext = createContext();

const initialAuth = null;

function AuthProvider({ children }) {
  const [auth, setAuth] = useState(initialAuth);

  const handleAuth = (e) => {
    if (auth === true) {
      setAuth(null);
    } else {
      setAuth(true);
    }
  };

  const data = {
    auth,
    handleAuth,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}

export { AuthProvider };
export default AuthContext;
