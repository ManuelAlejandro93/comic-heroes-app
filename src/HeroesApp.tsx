import { BrowserRouter } from 'react-router-dom';

import { SidebarProvider } from './shadcn/ui/sidebar';
import { SidebarTrigger } from '@/shadcn/ui/sidebar';

import { AppSidebar, HeroRoutes } from '@/HeroeApp';

import { AuthProvider } from '@/Contexts';
export function HeroesApp() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <div className='bg-blue-300'>
            <SidebarProvider defaultOpen={false}>
              <AppSidebar />
              <SidebarTrigger className='bg-white'></SidebarTrigger>
              <main className='w-full'>
                <HeroRoutes />
              </main>
            </SidebarProvider>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
