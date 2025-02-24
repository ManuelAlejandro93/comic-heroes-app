import { useContext } from 'react';
import { AuthContext } from '@/Contexts';

export const ContextTestComp = () => {
  const { authState, onLogin, onLogout } = useContext(AuthContext);
  return (
    <div>
      <h1>Pruebas en Auth Context Provider</h1>
      <p>{`${authState.name}`}</p>
      <p>{`${authState.logged}`}</p>
      <button onClick={() => onLogin()}>click on login</button>
      <button onClick={() => onLogout()}>click on logout</button>
    </div>
  );
};
