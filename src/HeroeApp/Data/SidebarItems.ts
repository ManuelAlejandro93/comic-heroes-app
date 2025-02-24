import {
  House,
  Info,
  Gavel,
  Zap,
  LogOut,
  Search,
  LogInIcon,
  LucideProps
} from 'lucide-react';

interface SidebarItem {
  title: string;
  url: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
}

export const sidebarItems: SidebarItem[] = [
  {
    title: 'Home',
    url: '/',
    icon: House
  },
  {
    title: 'About',
    url: '/about',
    icon: Info
  },
  {
    title: 'Marvel',
    url: '/marvel',
    icon: Gavel
  },
  {
    title: 'DC',
    url: '/DC',
    icon: Zap
  },
  {
    title: 'Search',
    url: '/search',
    icon: Search
  },
  {
    title: 'Search + Query Params',
    url: '/searchqueryparams',
    icon: Search
  },
  {
    title: 'Logout',
    url: '/logout',
    icon: LogOut
  },
  {
    title: 'Login',
    url: '/login',
    icon: LogInIcon
  }
];
