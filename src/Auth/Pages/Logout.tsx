import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/shadcn/ui/button';
import { AuthContext } from '@/Contexts';

export const LogoutPage = () => {
  const navigate = useNavigate();

  const { onLogout } = useContext(AuthContext);

  const handleOnLogout = () => {
    onLogout();
    navigate('/login', { replace: true });
  };
  return (
    <div className='text-center grid pr-16 space-y-8'>
      <h1 className='text-6xl text-white'>Welcome to Logout page</h1>
      <h2 className='text-red-500 text-3xl'>
        Do you really want to leave the App?
      </h2>
      <Button
        variant={'destructive'}
        onClick={() => handleOnLogout()}
      >
        Yes, Log me out, please.
      </Button>
    </div>
  );
};
