import { createContext, FC, ReactNode } from 'react';

// Definimos la interfaz para el contexto
interface AuthContextType {
  auth: boolean;
}

// Creamos el contexto con valores por defecto
export const AuthContext = createContext<AuthContextType>({
  auth: true
});

// Creamos un proveedor de contexto
export const AuthSyntheticProvider: FC<{ children: ReactNode }> = ({
  children
}) => {
  const auth: boolean = true;

  return (
    <AuthContext.Provider value={{ auth }}>{children}</AuthContext.Provider>
  );
};
