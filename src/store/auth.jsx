import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [user, setUser] = useState("");
  const [service, setService] = useState("");
  const authorizatioToken = `Bearer ${token}`;
  //function to stored the token in local storage
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken)
    return localStorage.setItem("token", serverToken);
  };

  let isLoggin = !!token;  //if there is value in toekn then isLoggin true otherwise false

  const logoutUser = () => {
    setToken("")
    setUser("")
    return localStorage.removeItem("token");
  };

  const userAuthentication = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/auth/user`, {
        method: "GET",
        headers: {
          Authorization: authorizatioToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data.msg)
      }
    }
    catch (error) {
      console.log('Error in fetch');
    }
  }

  useEffect(() => {
    userAuthentication();
  }, [token])


  const getServiceList = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/auth/service`, {
        method: "GET"
      });
      if (response.ok) {
        const data = await response.json();
        setService(data.msg)
      }
    }
    catch (error) {
      console.log('Error in fetch');
    }
  }

  useEffect(() => {
    getServiceList();
  }, [])

  return (
    <AuthContext.Provider value={{ storeTokenInLS, logoutUser, isLoggin, user, service, authorizatioToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};