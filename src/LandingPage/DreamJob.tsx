import {TextInput} from "@mantine/core";
import {IconSearch} from "@tabler/icons-react";

const DreamJob =()=>{
   return(
    <div className="flex items-center px-16">
        <div className="flex flex-col w-[45%]">
            <div className="text-6xl font-bold p-2 text-mineshaft-100 leading-tight [&>span]:text-bright-sun-300">Find your 
                <span> dream </span> <span>job</span> with us</div>
            <div className="text-lg text-mineshaft-200">
                Good Life begins with good company. Start exploring thousands of jobs in one place.
            </div>
            <div className="flex gap-2">
                <TextInput  className="bg-mineshaft-900 rounded-lg p-1 px-2 text-mineshaft-100 [&_input]:!bg-mineshaft-900 " label="Job Title" variant="filled" placeholder="Software Engineer"/>
                <TextInput  className="bg-mineshaft-900 rounded-lg p-1 px-2 text-mineshaft-100 [&_input]:!bg-mineshaft-900 [&_input]:!text-bright-sun-300" label="Job Type" variant="filled"  placeholder="Full Time"/>
                <div className="flex items-center justify-center h-full w-20 p-2 text-mineshaft-100 bg-bright-sun-300 rounded-lg hover:bg-amber-400 hover:cursor-pointer">
                <IconSearch className="h-[85%] w-[85%]"/>
                </div>
            </div>
            
        </div>
        <div className="w-[55%] flex justify-center">
            <div className="w-[30rem] ">
                 <img src="/Boy.png">
                 </img>
            </div>
        </div>
    </div>
   )
}

export default DreamJob;