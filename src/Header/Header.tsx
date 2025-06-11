 import {IconBell, IconBriefcaseFilled, IconSettings} from '@tabler/icons-react';
 import {Avatar} from '@mantine/core';
const Header =()=>{
    return(
        <div className="w-full bg-black h-32 text-white rounded-t-3xl flex justify-between 
        items-center px-8">
          <div className='flex gap-2'>
            <IconBriefcaseFilled/>
            <div className='font-semibold text-xl'>TheJobs</div>
          </div>
          <div className='flex gap-4 text-xs'>
            <a href="" className='bg-brand'>Find Jobs</a>
            <a href="">Find Talent</a>
            <a href="">Upload Job</a>
            <a href="">About Us</a>
          </div>
          <div className='flex gap-2 items-center '>
            <IconBell/>
            <div className='flex items-center'>
                <div>Mohan</div>
                <Avatar src='avatar.png'></Avatar>
            </div>
            <IconSettings/>
          </div>
        </div>
    )
}

export default Header;
