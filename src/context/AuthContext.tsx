// import { createContext, useContext, useEffect, useState } from "react";

// interface AuthContextType {
//   // updatePermissions: (userResponse: UserResponse) => void;
//   updateUserData: (user: LoginResponse) => void;
//   token: string | null;
//   // user: UserResponse | null;
//   getUserDetail: () => void;
// }

// const authApiService = new AuthApiService();
// const AuthContext = createContext<AuthContextType | null>(null);

// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const [token, setToken] = useState<string | null>(null);
//   const [user, setUser] = useState<UserResponse | null>(null);

//   const updateUserData = (userResponse: LoginResponse) => {
//     // const encryptedUser = encryptData(
//     //   userResponse.user,
//     //   import.meta.env.VITE_KEY!
//     // );
//     localStorage.setItem("token", userResponse.token);
//     // localStorage.setItem("data", String(encryptedUser));
//     localStorage.setItem("data", JSON.stringify(userResponse.user));
//     setUser(userResponse.user);
//     setToken(userResponse.token);
//   };

//   const getUserData = () => {
//     // checkLocalDataExist();

//     const data = localStorage.getItem("data");
//     const token = localStorage.getItem("token");
//     if (data == null || token == null) {
//       return;
//     }
//     // const decryptedUser: UserResponse = JSON.parse(
//     //   decryptData(data!, import.meta.env.VITE_KEY!)
//     // );

//     setToken(token);
//     // setUser(decryptedUser!);
//     setUser(JSON.parse(data));
//   };

//   useEffect(() => {
//     getUserData();
//   }, []);

//   return (
//     <AuthContext.Provider
//       value={{
//         updateUserData,
//         user,
//         token,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext)!;
