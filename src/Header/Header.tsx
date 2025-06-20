 import {IconBell, IconBriefcaseFilled, IconSettings} from '@tabler/icons-react';
 import {Avatar, Indicator} from '@mantine/core';
import NavLinks from './NavLinks';
const Header =()=>{
    return(
        <div className="w-full bg-mineshaft-950 h-28 text-white rounded-t-3xl flex justify-between 
        items-center px-8">
          <div className='flex gap-2 text-bright-sun-300'>
            <IconBriefcaseFilled/>
            <div className='font-semibold text-xl'>TheJobs</div>
          </div>
        <NavLinks/>
          <div className='flex gap-2 items-center '>
            
            <div className='flex items-center'>
                <div>Mohan</div>
                <div className='p-1.5'>
                
                <Avatar src='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png' ></Avatar>
                 
                </div>
            </div>
            <div className='bg-mineshaft-900 p-2 rounded-full'>
            <IconSettings stroke={1.5}/>
            </div>
            <div className='bg-mineshaft-900 p-2 rounded-full'>
            <Indicator offset={-1.5} color='brightsun.4'>      
            <IconBell stroke={1.5}/>
            </Indicator> 
            </div>
          </div>
        </div>
    )
}

export default Header;
