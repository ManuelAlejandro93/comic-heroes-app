import { AuthStateType } from '@/Contexts';

export interface ContextStateType {
  authState: AuthStateType;
  onLogin: () => void;
  onLogout: () => void;
}
