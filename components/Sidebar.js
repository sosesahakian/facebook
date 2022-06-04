import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

import SidebarRow from './SidebarRow';

function Sidebar() {
  return (
    <div className='p-2 mt-5 max-w-[600px] xl:min-w[300px]'>
        <SidebarRow Icon={PeopleAltIcon} title='Friends'/>
        <SidebarRow Icon={PeopleOutlineIcon} title='Groups'/>
        <SidebarRow Icon={ShoppingBagIcon} title='Marketplace'/>
        <SidebarRow Icon={DesktopWindowsIcon} title='Watch'/>
        <SidebarRow Icon={CalendarMonthIcon} title='Events'/>
        <SidebarRow Icon={AccessTimeIcon} title='Memories'/>
        <SidebarRow Icon={ExpandMoreIcon} title='See More'/>

    </div>
  )
}

export default Sidebar