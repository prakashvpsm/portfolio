import React from 'react'
import { projects } from '../../utils/projects'

export default function Projects() {
    return (
        <div id='works' className='w-5/6 mx-auto flex flex-col gap-10'>
            <div className='flex flex-col gap-5'>
            <div className='bg-alt  w-5 h-1 rounded-full'></div>
                <div className='font-bold text-3xl'>Projects</div>
                <div className='bg-alt  w-20 h-1 ml-10 rounded-full'></div>
            </div>
            <div className=''>
                <div className='flex flex-col gap-5'>
                    {
                        projects.map((project, i) => {
                            return <div className='w-full flex flex-col bg-white shadow rounded-lg'>
                                 <div className='ml-auto'>
                                        <div className=' text-white px-5 py-3 rounded-bl-lg text-xs bg-alt'>
                                            {
                                                project.team ? 'Team' : 'Individual'
                                            }
                                        </div>
                                    </div>
                                <div className='flex flex-col gap-5 p-5'>
                                <div className='flex'>
                                    <div className='font-bold text-xl'>
                                        {project.title}
                                    </div>
                                </div>
                                <div className='text-gray-600'>
                                    {project.desc}
                                </div>
                                <div className='mt-auto'>
                                    <div className='flex gap-3'>
                                        {
                                            project.techStacks.map(d => {
                                                return <div className='bg-primary px-3 py-2 rounded text-white text-xs'>{d}</div>
                                            })
                                        }
                                    </div>
                                </div>
                                </div>
                                
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
