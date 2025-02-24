import { createContext } from 'react';
import { ContextStateType } from '@/Contexts';
import { useAuthHook } from '../../Hooks';

interface Props {
  children: React.ReactNode;
}

export const AuthContext = createContext<ContextStateType>(
  '' as unknown as ContextStateType
);

export const AuthProvider = ({ children }: Props) => {
  const contextState = useAuthHook();
  return (
    <AuthContext.Provider value={contextState}>{children}</AuthContext.Provider>
  );
};
