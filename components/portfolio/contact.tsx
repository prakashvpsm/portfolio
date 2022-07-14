import React from 'react'
import { projects } from '../../utils/projects'

const types = [
    {
        link : "https://github.com/prakashvpsm",
        icon : "github"
    },
    {
        link : "https://discordapp.com/users/prakash-v",
        icon : "discord"
    },
    {
        link : "https://www.linkedin.com/in/prakash-v/",
        icon : "linkedin"
    }
]

export default function Contacts() {
    return (
        <div id='contact' className='w-5/6 mx-auto flex flex-col gap-10 mb-32'>
            <div className='flex flex-col gap-5'>
            <div className='bg-alt  w-5 h-1 rounded-full'></div>
                <div className='font-bold text-3xl'>Contact me</div>
                <div className='bg-alt  w-20 h-1 ml-10 rounded-full'></div>
            </div>
            <div className='bg-white shadow-md py-20 px-10 flex flex-col gap-10 rounded-lg '>
                <div className='flex items-center justify-center gap-10 xs:flex-col sm:flex-col xs:items-start sm:items-start'>
                    <div className=''><span className='font-bold'>Email:</span>  prakashupsm@gmail.com</div>
                    <div className=''><span className='font-bold'>Phone:</span>  +91 8072045512</div>
                </div>
                <div className='flex items-center justify-center gap-10 mt-10'>
                    <div className='flex gap-5'>
                        {
                            types.map((d) => {
                                return <div>
                                    <a target={"_blank"} href={d.link}>
                                        <img className='w-10 h-10' src={`icons/${d.icon}.png`} />
                                    </a>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
