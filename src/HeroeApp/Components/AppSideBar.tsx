import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { PersonStandingIcon, DoorClosed } from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from '@/shadcn/ui/sidebar';

import { sidebarItems } from '@/HeroeApp';
import { AuthContext } from '@/Contexts';

export function AppSidebar() {
  const navigate = useNavigate();
  const { authState, onLogout } = useContext(AuthContext);
  const { toggleSidebar, open } = useSidebar();

  const customToggle = (): void => {
    if (open) toggleSidebar();
  };

  return (
    <Sidebar
      variant='floating'
      collapsible='icon'
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Heroes SPA App</SidebarGroupLabel>

          {authState.logged ? (
            <SidebarGroupLabel>
              <PersonStandingIcon />
              <span>
                User: <span className='text-blue-700'>{authState.name}</span>{' '}
              </span>
            </SidebarGroupLabel>
          ) : (
            ''
          )}
          <SidebarGroupContent>
            <SidebarMenu onClick={() => customToggle()}>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url}>
                      {({ isActive }) =>
                        isActive ? (
                          <>
                            <item.icon className='text-blue-600' />
                            <span className='text-blue-700 underline'>
                              {item.title}
                            </span>
                          </>
                        ) : (
                          <>
                            <item.icon />
                            <span>{item.title}</span>
                          </>
                        )
                      }
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className='hover:text-red-600'
                >
                  <div
                    onClick={() => {
                      onLogout();
                      navigate('login');
                    }}
                  >
                    <DoorClosed />
                    <span>Quick Exit</span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
