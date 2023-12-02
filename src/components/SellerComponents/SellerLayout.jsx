import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SideBar from './SideBar';
import Header from './Header';
import { SelectedLinkProvider } from './SellerSelectedLinkContext';
import indexbg from './../../assests/indexbg.jpg';
import SellerDashboardStatsGrid from './SellerDashboardStatsGrid';

export default function SellerLayout() {
  const location = useLocation();

  // Define routes where you want to hide the sidebar and header
  const hideLayoutRoutes = ['/sellerhome/sellernotifications', '/sellerhomei/somethingelse']; // Add routes as needed

  // Check if the current route matches any of the hideLayoutRoutes
  const shouldHideLayout = hideLayoutRoutes.some(route => location.pathname.startsWith(route));

  return (
    <div className={`flex h-screen w-screen overflow-hidden ${shouldHideLayout ? 'hidden-layout' : ''}`} 
        style={{ backgroundImage: `url(${indexbg})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center'}}>
      <SelectedLinkProvider>
        {!shouldHideLayout && (
          <div className='sticky h-full z-50'>
            <SideBar />
          </div>
        )}

        {!shouldHideLayout && (
          <div className='flex flex-col w-full'>
            <Header />
            <div className='sticky flex flex-row flex-1 top-0 z-10'>
              <div className='w-[100%]'>
                <div className='absolute w-[100%] h-[100%]'>
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        )}
      </SelectedLinkProvider>
    </div>
  );
}
