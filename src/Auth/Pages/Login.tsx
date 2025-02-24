import { Button } from '@/shadcn/ui/button';
import { useContext } from 'react';
import { AuthContext } from '@/Contexts';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate();

  const { onLogin } = useContext(AuthContext);

  const handleOnLogin = () => {
    onLogin();
    navigate(-1);
  };
  return (
    <div className='text-center grid pr-16 space-y-8'>
      <h1 className='text-6xl text-white'>Welcome to Login page</h1>
      <h2 className='text-blue-500 text-3xl'>Welcome to your next adventure</h2>
      <Button onClick={() => handleOnLogin()}>Log me in</Button>
    </div>
  );
};
